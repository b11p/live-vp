<template>
    <Artplayer @get-instance="getInstance" :option="option" :style="style" />
</template>

<script lang="ts">
import Artplayer from "./Artplayer.vue";
import type Option from 'artplayer/types/option';

export default {
    data() {
        let option: Option = {
            container: '.artplayer-app',
            url: 'https://live-flv.b11p.com/live/livestream.flv',
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
