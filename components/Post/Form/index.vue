<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center py-6">
            <UISpinner />
        </div>
        <div v-else>
            <PostItem :post="props.replyTo" v-if="props.replyTo && props.showReply" hideActions />
            <PostFormInput :placeholder="props.placeholder" :user="props.user" @onSubmit="handleFormSubmit" />
        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(["onSuccess"]);
const loading = ref(false);
const { postPost } = usePosts();

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
    placeholder: {
        type: String,
        default: "What's happening ?",
    },
    replyTo: {
        type: Object,
        default: null,
    },
    showReply: {
        type: Boolean,
        default: false,
    },
});

async function handleFormSubmit(data) {
    loading.value = true;
    try {
        const response = await postPost({
            text: data.text,
            mediaFiles: data.mediaFiles,
            replyTo: props.replyTo?.id,
        });

        emits("onSuccess", response.post);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
}
</script>
