<template>
    <div class="flex p-4">
        <div>
            <img class="h-10 w-10 rounded-full" :src="author.profileImage" alt="" />
        </div>

        <div class="ml-3">
            <span class="font-medium text-gray-800 dark:text-white">{{ author.name }}</span>

            <span class="ml-3 text-sm font-medium text-gray-400">
                <nuxt-link to="#">
                    {{ author.handle }}
                </nuxt-link>
                . {{ props.post.postedAtHuman }}
            </span>

            <p v-if="props.post.replyTo" class="text-sm">
                <span class="text-gray-500"> Replying to </span>

                <nuxt-link :to="replyToPostUrl" class="text-blue-400">
                    {{ props.post.replyTo.author.handle }}
                </nuxt-link>
            </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
});

const author = props.post.author;
const replyToPostUrl = computed(() => `/status/${props.post?.replyTo?.id}`);
</script>
