<template>
    <div ref="artRef" style="width: 100%;"></div>
</template>

<script setup lang="ts">
import Artplayer from "artplayer";
import artplayerPluginDanmaku from "artplayer-plugin-danmuku";
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import liveDan from "./Danmaku.vue";

const emit = defineEmits(['get-instance']);

const props = defineProps({
    option: {
        type: Object,
        required: true,
    },
    danmakuOption: {
        type: Object,
        required: true,
    }
});

const instance = ref<Artplayer | null>(null);
const artRef = ref<any>(null);

onMounted(async () => {
    let mpegts = (await import("mpegts.js")).default;
    let dispose: (() => void) | null | undefined = null;
    let reload: () => void;
    let art: Artplayer;
    let destroyDanmaku = () => {
        if (art.plugins.artplayerPluginDanmuku) {
            art.plugins.artplayerPluginDanmuku.config({}).queue = [];
        }
    }
    let onVideoEnded = e => {
        // if (dispose) {
        //     dispose();
        //     dispose = null;
        // }
        // if (!art.isDestroy) {
        //     art.destroy(false);
        // }
        // InitArtplayer();
        if (reload) {
            reload();
            art.play();
        }
        console.log("ended");
    };
    // function InitArtplayer() {
    art = new Artplayer({
        url: undefined as any,

        isLive: true,
        fullscreen: true,
        fullscreenWeb: true,
        autoSize: false,
        playsInline: true,
        setting: true,
        pip: true,
        lang: "zh-cn",
        customType: {
            mpegts: function (video, url) {
                console.log(url);
                if (mpegts.getFeatureList().mseLivePlayback) {
                    reload = () => {
                        if (dispose)
                            dispose();
                        console.log("Loading mpegts player");
                        let mpegtsPlayer = mpegts.createPlayer({
                            type: 'flv',
                            url: url,
                            isLive: true,
                        }, {
                            liveBufferLatencyChasing: true,
                            enableStashBuffer: false,
                            lazyLoadMaxDuration: 10,
                            lazyLoad: true,
                        });

                        // configure error handling
                        mpegtsPlayer.on(mpegts.Events.ERROR, (t, u, v) => {
                            console.error({ t, u, v });
                            console.error(v);
                            let isPlaying = !art.video.paused;
                            console.log("isPlaying: " + isPlaying);
                            setTimeout(() => {
                                reload();
                                if (isPlaying) {
                                    art.play();
                                }
                            }, 1000); // 必须设置延迟重载，否则 Firefox 会拦截间隔过短的网络请求。
                            // Firefox 中，mpegts.js 第一次加载会报一个错，即使网络没有问题。
                            // 如果此处不设置延时的话，Firefox 依然会拦截请求，导则视频完全无法加载。
                            // 实际上，第一次报的错不处理也可以播放，但是无法从报错类型上将其区分开来。
                            // flv.js 也有类似的报错。
                            // 可能是 Firefox 或者 flv.js 的 bug。
                        });

                        mpegtsPlayer.attachMediaElement(video);
                        mpegtsPlayer.load();
                        dispose = () => {
                            mpegtsPlayer.unload();
                            mpegtsPlayer.detachMediaElement();
                            mpegtsPlayer.destroy();
                            dispose = null;
                        };
                        destroyDanmaku();
                    };
                    reload();
                }
            },
        },
        plugins: [
            artplayerPluginDanmaku({
                danmuku: [],
                speed: 5,
                opacity: 1,
                fontSize: 25,
                color: "#FFFFFF",
                mode: 0,
                margin: ['2%', 60], // 弹幕上下边距，支持数字和百分比
                antiOverlap: true, // 是否防重叠
                useWorker: false, // 是否使用 web worker
                synchronousPlayback: false, // 是否同步到播放速度
                // filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数
                lockTime: 1,
                maxLength: 500,
                minWidth: 200,
                maxWidth: 0,
                theme: "light",
                ...props.danmakuOption,
            })
        ],
        ...props.option,
        container: artRef.value,
    }, function onReady(art) {
        this.play();
    });
    art.on("video:ended", onVideoEnded);
    instance.value = art;
    // }
    // InitArtplayer();
    nextTick(() => {
        emit('get-instance', instance.value);
    });

    // config danmaku
    var danmakuSingleton = liveDan(
        "https://live-danmaku.b11p.com/danmakuHub",
        props.danmakuOption.group,
        function (user, dan) {
            // dan.border = false;
            dan.time = undefined;
            dan.color = '#FFFFFF';
            console.log(dan);
            art.plugins.artplayerPluginDanmuku.emit(dan);
        },
        function (danmakuList) {
            for (let currentDan of danmakuList) {
                // addDanmakuHistory(currentDan.user, currentDan.data.text, currentDan.time_stamp)
            }
        },
    );
    // danmakuSingleton.connection.on("ReceiveMessage", function (user, message) {
    //     addDanmakuHistory(user, JSON.parse(message).text);
    // });
    art.on('artplayerPluginDanmuku:emit' as any, (danmu) => {
        danmakuSingleton.send(danmu);
        // addDanmakuHistory("我", danmu.text);
    });
});

onBeforeUnmount(() => {
    if (instance.value) {
        instance.value.destroy(false);
    }
});
</script>