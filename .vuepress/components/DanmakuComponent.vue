<template>
    <div>
        <p></p>
        <details style="width: 100%;">
            <summary>弹幕历史</summary>
            <p v-for="danmaku in danmakuList" :key="danmaku.id">
                {{ danmaku.text }}
            </p>
        </details>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const danmakuList: Ref<{
    id: number;
    text: string;
}[]> = ref<{
    id: number;
    text: string;
}[]>([]);

const PushDanmaku = (d: {
    id: number;
    text: string;
}) => {
    console.log("Push danmaku in component");
    danmakuList.value.push(d);
}

defineExpose({ PushDanmaku });

</script>
