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
            url: 'https://live-flv.b11p.com/live/mygo.flv',
            // type: "mpegts",
            theme: "#ea94b5",
            isLive: true,
            autoplay: false,
            autoMini: false,
            volume: 1,
            pip: true,
            lang: "zh-cn",
            quality: [
                {
                    default: true,
                    html: 'IPv4',
                    url: 'https://live4.b11p.com/live/mygo.flv',
                },
                {
                    html: 'Cloudflare',
                    url: 'https://live-cf.b11p.com/live/mygo.flv',
                },
                {
                    html: "HLS (iOS 兼容)",
                    url: "https://live-flv.b11p.com/live/mygo.m3u8",
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
                group: "109ad6e8-9729-459a-81b8-d79eae370412",
                AddDanmakuHistory: (name: string, text: string) => {
                    console.log("Push danmaku");
                    this.$refs.DanmakuComp!.PushDanmaku({
                        id: danmakuId++,
                        text: name + ": " + text,
                    });
                },
            },
        };
    },
    components: {
        Artplayer,
        DanmakuComponent,
        ClearUserNameComponent
    },
    methods: {
        getInstance(art: any) {
            console.info(art);
        },
    },
};
</script>
