<template>
    <div>
        <MainSection title="Post" :loading="loading">
            <Head>
                <Title></Title>
            </Head>
            <PostDetails v-model:post="post" :user="user" :loadingMore="loadingMore" @updatePosts="updatePosts" />
        </MainSection>
    </div>
</template>
<script setup>
const loading = ref(false);
const post = ref(null);
const loadingMore = ref(false);
const { getPostById } = usePosts();
const { useAuthUser } = useAuth();
const user = useAuthUser();

watch(
    () => useRoute().fullPath,
    () => getPost()
);

function getPostIdFromRoute() {
    return useRoute().params.id;
}

async function getPost() {
    loading.value = true;
    try {
        const response = await getPostById(getPostIdFromRoute());
        post.value = response.post;
    } catch (error) {
        throw error;
    } finally {
        loading.value = false;
    }
}
async function updatePosts() {
    try {
        loadingMore.value = true;
        const response = await getPostById(getPostIdFromRoute());
        post.value = response.post;
    } catch (error) {
        throw error;
    } finally {
        loadingMore.value = false;
    }
}

onBeforeMount(() => {
    getPost();
});
</script>
