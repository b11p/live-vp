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
            url: 'https://live-vps4.b11p.com/live/4k.m3u8',
            // type: "mpegts",
            theme: "#3388bb",
            isLive: true,
            autoplay: false,
            autoMini: false,
            volume: 1,
            pip: true,
            lang: "zh-cn",
            quality: [
                {
                    default: true,
                    html: "HLS (更稳定)",
                    url: "https://live-vps4.b11p.com/live/4k.m3u8",
                },
                {
                    html: "HLS + 双栈",
                    url: "https://live-vps.b11p.com/live/4k.m3u8",
                },
                {
                    html: 'FLV (延迟更低)',
                    url: 'https://live-vps4.b11p.com/live/4k.flv',
                },
                {
                    html: 'FLV + 双栈',
                    url: 'https://live-vps.b11p.com/live/4k.flv',
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
                group: "7659412b-f470-4e61-8c72-0ddb5814ca56",
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
        ClearUserNameComponent,
    },
    methods: {
        getInstance(art: any) {
            console.info(art);
        },
    },
};
</script>
