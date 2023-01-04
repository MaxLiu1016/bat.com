<template>
    <div @click.stop.prevent="emits('onClick')" class="group flex cursor-pointer items-center text-gray-400">
        <div
            :class="`rounded-full p-2 group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 dark:group-hover:bg-opacity-20 ${defaultTransition}`"
        >
            <slot name="icon" :classes="`w-${props.size} h-${props.size}`" />
        </div>

        <span :class="`ml-1 group-hover:text-${props.color}-400`">
            <slot></slot>
        </span>
    </div>
</template>
<script setup>
const { defaultTransition } = useStyleConfig();
const emits = defineEmits(["onClick"]);

const props = defineProps({
    color: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 5,
    },
});
</script>
