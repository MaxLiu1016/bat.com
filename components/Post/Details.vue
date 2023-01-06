import test from 'node:test';
<template>
    <div>
        <PostItem :post="postVModel" compact />

        <PostForm placeholder="Post your reply" :reply-to="postVModel" :user="props.user" @on-success="handleFormSuccess" />

        <PostListFeed v-model:posts="replies" :loading-more="loadingMore" />
    </div>
</template>
<script setup>
const emits = defineEmits(["onUpdate", "update:post"]);
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    loadingMore: {
        type: Boolean,
        required: true,
    },
});
const postVModel = computed({
    get() {
        return props.post;
    },
    set(value) {
        emits("update:post", value);
    },
});

const replies = computed(() => postVModel.value?.replies || []);

function handleFormSuccess(post) {
    emits("updatePosts");
}
</script>
