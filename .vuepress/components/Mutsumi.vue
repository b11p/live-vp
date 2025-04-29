<template>
    <Artplayer @get-instance="getInstance" :option="option" :style="style" :danmaku-option="danmakuOption" />
    <ClearUserNameComponent />
    <DanmakuComponent ref="DanmakuComp" />
</template>

<script lang="ts">
import Artplayer from "./Artplayer.vue";
import ClearUserNameComponent from "./ClearUserNameComponent.vue";
import DanmakuComponent from "./DanmakuComponent.vue";
import type Option from 'artplayer/types/option';

let danmakuId = 0;

export default {
    data() {
        let option: Option = {
            container: '.artplayer-app',
            url: 'https://live.home.qri.moe:47290/live/livestream.flv',
            // type: "mpegts",
            theme: "#ea94b5",
            isLive: false,
            autoplay: false,
            autoMini: false,
            volume: 1,
            pip: true,
            lang: "zh-cn",
            quality: [
                {
                    default: true,
                    html: '默认',
                    url: 'https://live.home.qri.moe:47290/live/livestream.flv',
                },
            ],
        };
        return {
            option: option,
            style: {
                width: "100%",
                "aspect-ratio": "16/9",
                // height: "600px",
                // height: "100vh",
                // height: "auto",
                margin: "0",
            },
            danmakuOption: {
                group: "bbda9a4b-bfe8-4704-87b1-9cf2088edaa5",
                AddDanmakuHistory: (name: string, text: string) => {
                    console.log("Push danmaku");
                    this.$refs.DanmakuComp!.PushDanmaku({
                        id: danmakuId++,
                        text: name + ": " + text,
                    });
                },
            }
        };
    },
    components: {
        Artplayer,
        DanmakuComponent,
        ClearUserNameComponent,
    },
    methods: {
        getInstance(art: any) {
            console.info(art);
        },
    },
};
</script>
