<template>
    <div :class="borderColor">
        <div class="border-white-200 sticky top-0 z-10 mt-2 border-y bg-white/80 px-4 py-3 backdrop-blur dark:bg-dim-900/80">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ props.title }}</h2>
        </div>

        <div v-if="props.loading" class="flex items-center justify-center border-b p-4" :class="borderColor">
            <UISpinner />
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const { borderColor } = useStyleConfig();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
});
</script>
