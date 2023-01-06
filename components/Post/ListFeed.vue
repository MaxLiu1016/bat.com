<template>
    <div>
        <div v-if="isEmptyArray" class="p-4">
            <p class="text-center text-gray-500">No posts 😢</p>
        </div>
        <div v-else>
            <NuxtLink
                class="block cursor-pointer border-b pb-4 hover:bg-gray-100 dark:hover:bg-dim-300"
                :class="[borderColor, defaultTransition]"
                v-for="post in postsVmodel"
                :key="post.id"
                :to="`/status/${post.id}`"
            >
                <PostItem :post="post" compact />
            </NuxtLink>
        </div>

        <div v-if="loadingMore" class="mt-4 text-center text-base font-bold">loading more....</div>
    </div>
</template>
<script setup>
const emit = defineEmits(["update:posts"]);
const { borderColor, defaultTransition } = useStyleConfig();

const props = defineProps({
    posts: {
        type: Array,
        required: true,
    },
    loadingMore: {
        type: Boolean,
        required: true,
    },
});

const postsVmodel = computed({
    get: () => props.posts,
    set: (value) => emit("update:posts", value),
});

const isEmptyArray = computed(() => postsVmodel.length === 0);
</script>
