<template>
    <div class="m-2 overflow-hidden rounded-2xl border bg-gray-50 dark:bg-dim-700" :class="borderColor">
        <h1 class="border-b p-3 text-xl font-extrabold text-gray-900 dark:text-white" :class="borderColor">
            {{ props.title }}
        </h1>

        <slot></slot>

        <div
            @click="alertHandler('開發中~ 敬請期待')"
            class="cursor-pointer p-3 text-sm text-blue-400 hover:bg-gray-100 dark:hover:bg-dim-300"
            :class="defaultTransition"
        >
            Show more
        </div>
    </div>
</template>
<script setup>
const { borderColor, defaultTransition } = useStyleConfig();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
function alertHandler(params) {
    alert(params);
}
</script>
