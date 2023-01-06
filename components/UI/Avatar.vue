<template lang="">
    <div
        class="inline-block h-10 w-10 rounded-full text-center font-bold leading-10 text-white"
        :style="{ 'background-color': backgroundColor }"
    >
        {{ text[0].toUpperCase() + text[1] + text[2] }}
    </div>
</template>
<script setup lang="ts">
defineProps({
    backgroundColor: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>
<style lang=""></style>
