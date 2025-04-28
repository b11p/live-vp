<template>
    <div ref="artRef" style="width: 100%;"></div>
</template>

<script setup lang="ts">
import Artplayer from "artplayer";
import artplayerPluginDanmaku from "artplayer-plugin-danmuku";
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Hls from 'hls.js'
import liveDan from "./Danmaku.vue";
import Option from "artplayer/types/option";

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
    let onVideoEnded = _e => {
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
            props.danmakuOption.AddDanmakuHistory(user, dan.text);
        },
        function (danmakuList) {
            for (let currentDan of danmakuList) {
                // addDanmakuHistory(currentDan.user, currentDan.data.text, currentDan.time_stamp)
                props.danmakuOption.AddDanmakuHistory(currentDan.user, currentDan.data.text);
            }
        },
    );

    let artPlayerOption: Option = {
        url: undefined as any,

        isLive: true,
        fullscreen: true,
        fullscreenWeb: true,
        autoSize: false,
        playsInline: true,
        customType: {
            flv: function (video, url) {
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
                            lazyLoadMaxDuration: 180, // 这个值什么时候生效非常奇怪，所以我们先用默认值
                            // https://github.com/xqq/mpegts.js/blob/494b9eb43d4527915ebed82cdaf6f4318419e360/src/player/loading-controller.ts#L98
                            lazyLoad: true, // 如果开启，恢复加载时会请求 range，SRS 无法处理。实际上播放时已经加了重新加载逻辑，因此实际不会触发恢复加载
                            // https://github.com/bilibili/flv.js/blob/42343088f22619cf014a057b3878fe3d320016a6/src/player/flv-player.js#L425
                            autoCleanupSourceBuffer: true,
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
                            mpegtsPlayer.pause(); // 可能可以缓解重新播放后无声
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
            m3u8: function (video, url) {
                console.log(url);
                if (Hls.isSupported() || video.canPlayType('application/vnd.apple.mpegurl')) {
                    reload = () => {
                        if (dispose)
                            dispose();
                        if (Hls.isSupported()) {
                            console.log("Loading hls player");
                            const hls = new Hls({
                                liveSyncDuration: 10,
                                liveMaxLatencyDuration: 20,
                                // maxLiveSyncPlaybackRate: 1, // 在 iOS 上会造成问题
                                // lowLatencyMode: true,
                                liveDurationInfinity: true,
                            });

                            // error
                            hls.on(Hls.Events.ERROR, (e, d) => {
                                console.error({ e, d });
                                if (!d.fatal) {
                                    return;
                                }
                                let isPlaying = !art.video.paused;
                                console.log("isPlaying: " + isPlaying);
                                setTimeout(() => {
                                    reload();
                                    if (isPlaying) {
                                        art.play();
                                    }
                                }, 1000);
                            });

                            console.log(hls);

                            hls.loadSource(url);
                            hls.attachMedia(video);
                            dispose = () => {
                                hls.detachMedia();
                                hls.destroy();
                                dispose = null;
                            };
                        }
                        else {
                            console.log("Using native browser support");
                            video.src = url;
                        }
                        destroyDanmaku();
                    };
                    reload();
                } else {
                    art.notice.show = 'Unsupported playback format: m3u8';
                }
            },
        },
        plugins: [
            artplayerPluginDanmaku({
                danmuku: [],
                beforeEmit(danmu) {
                    danmakuSingleton.send(danmu);
                    if (props.danmakuOption.AddDanmakuHistory) {
                        console.log("Adding danmaku history:");
                        console.log(danmu.text);
                        props.danmakuOption.AddDanmakuHistory("我", danmu.text);
                    }
                    return true;
                },
                speed: 5,
                opacity: 1,
                fontSize: 25,
                color: "#FFFFFF",
                mode: 0,
                margin: ['2%', 60], // 弹幕上下边距，支持数字和百分比
                antiOverlap: true, // 是否防重叠
                synchronousPlayback: false, // 是否同步到播放速度
                // filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数
                lockTime: 1,
                maxLength: 500,
                theme: "light",
                ...props.danmakuOption,
            })
        ],
        ...props.option,
        container: artRef.value,
    };
    if ((artPlayerOption.type == "flv" || artPlayerOption.url.endsWith(".flv"))
        && !mpegts.getFeatureList().mseLivePlayback
        && artPlayerOption.quality) {
        // iOS fallback.
        for (let q of artPlayerOption.quality) {
            q.default = undefined;
            if (!q.url.endsWith(".flv")) {
                let dotIdx = q.url.lastIndexOf(".");
                artPlayerOption.type = q.url.substring(dotIdx + 1);
                artPlayerOption.url = q.url;
                q.default = true;
                break;
            }
        }
    }
    art = new Artplayer(artPlayerOption, function onReady(art) {
        this.play();
    });
    art.on("video:ended", onVideoEnded);
    art.on('destroy', () => {
        if (dispose) dispose();
    });
    instance.value = art;
    nextTick(() => {
        emit('get-instance', instance.value);
    });

    art.on('play', () => {
        if (art.video.buffered.length > 1) {
            console.log("Buffer count incorrect, try reloading.");
            // onVideoEnded(null);
        }
        if (art.video.buffered.length == 1
            && art.video.buffered.end(0) - art.video.currentTime >= 15) { // 这个值理应与 lazyLoadMaxDuration 相关，但是实际发现有时候缓冲 90 秒就停止了。前端，如此神奇！
            // update: 当使用 4K 时，缓冲更短就停止了，所以我们使用较短的时间
            console.log("Buffer too long, try reloading.");
            onVideoEnded(null);
        }
    });
});

onBeforeUnmount(() => {
    if (instance.value) {
        instance.value.destroy(false);
    }
});
</script>