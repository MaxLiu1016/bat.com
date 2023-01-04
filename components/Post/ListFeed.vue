<template>
    <div>
        <div v-if="isEmptyArray" class="p-4">
            <p class="text-center text-gray-500">No posts 😢</p>
        </div>
        <div
            v-else
            class="cursor-pointer border-b pb-4 hover:bg-gray-100 dark:hover:bg-dim-300"
            :class="[borderColor, defaultTransition]"
            v-for="post in props.posts"
            :key="post.id"
            @click.native="redirect(post)"
        >
            <PostItem :post="post" compact />
        </div>
    </div>
</template>
<script setup>
const { borderColor, defaultTransition } = useStyleConfig();

const props = defineProps({
    posts: {
        type: Array,
        required: true,
    },
});

const isEmptyArray = computed(() => props.posts.length === 0);

function redirect(post) {
    navigateTo(`/status/${post.id}`);
}
</script>
