<template>
    <div>
        <PostItemHeader :post="props.post" />
        <div :class="postBodyWrapper">
            <p class="w-auto flex-shrink font-medium text-gray-800 dark:text-white" :class="textSize">
                {{ props.post.text }}
            </p>

            <div
                v-for="image in post.mediaFiles"
                :key="image.id"
                class="my-3 mr-2 flex w-3/4 overflow-hidden rounded-2xl border-2"
                :class="borderColor"
            >
                <img :src="image.url" class="w-full scale-105 rounded-2xl" />
            </div>

            <div class="mt-2" v-if="!props.hideActions">
                <PostItemActions :post="props.post" :compact="props.compact" @on-comment-click="handleCommentClick" />
            </div>
        </div>
    </div>
</template>
<script setup>
const { borderColor } = useStyleConfig();

// const emitter = useEmitter();

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
    compact: {
        type: Boolean,
        default: false,
    },
    hideActions: {
        type: Boolean,
        default: false,
    },
});

const postBodyWrapper = computed(() => (props.compact ? "ml-16" : "ml-2 mt-4"));

const textSize = computed(() => (props.compact ? "text-base" : "text-2xl"));

// function handleCommentClick() {
//     emitter.$emit("replyPost", props.post);
// }
</script>
