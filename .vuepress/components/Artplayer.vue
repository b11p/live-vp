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
    let art = new Artplayer({
        url: undefined as any,

        type: "mpegts",
        isLive: false,
        autoplay: true,
        autoMini: true,
        fullscreen: true,
        fullscreenWeb: true,
        autoSize: false,
        playsInline: true,
        setting: true,
        customType: {
            mpegts: function (video, url) {
                console.log(url);
                if (mpegts.getFeatureList().mseLivePlayback) {
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
                    mpegtsPlayer.attachMediaElement(video);
                    mpegtsPlayer.load();
                    dispose = () => {
                        mpegtsPlayer.unload();
                        mpegtsPlayer.detachMediaElement();
                        mpegtsPlayer.destroy();
                    };
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
                minWidth: 0,
                maxWidth: 0,
                theme: "light",
                ...props.danmakuOption,
            })
        ],
        ...props.option,
        container: artRef.value,
    });
    instance.value = art;
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