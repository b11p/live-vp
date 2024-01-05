<template>
    <p ref="userNameP" hidden>你的用户名是：<span id="userNameSpan">{{ userName }}</span> <button
            @click="clearUserName">清除用户名</button></p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const userName = ref<string | null>(null);

const userNameP = ref<any>(null);

onMounted(async () => {
    userName.value = window.localStorage.getItem("danmakuUserName");

    if (userName.value) {
        userNameP.value.hidden = false;
    }
});

function clearUserName() {
    window.localStorage.removeItem('danmakuUserName');
    window.alert("清除成功，发送弹幕即可重新设置用户名。");
    userNameP.value.hidden = true;
}
</script>
