<template>
    <Artplayer @get-instance="getInstance" :option="option" :style="style" :danmaku-option="danmakuOption" />
</template>

<script lang="ts">
import Artplayer from "./Artplayer.vue";
import type Option from 'artplayer/types/option';

export default {
    data() {
        let option: Option = {
            container: '.artplayer-app',
            url: 'https://live-flv.b11p.com/live/livestream.flv',
            type: "mpegts",
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
                    html: 'IPv4',
                    url: 'https://live4.b11p.com/live/livestream.flv',
                },
                {
                    html: 'Cloudflare',
                    url: 'https://live-cf.b11p.com/live/livestream.flv',
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
                group: "4463403c-aff8-c16d-0933-4636405ff116",
            }
        };
    },
    components: {
        Artplayer,
    },
    methods: {
        getInstance(art: any) {
            console.info(art);
        },
    },
};
</script>
