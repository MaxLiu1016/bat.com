<template>
    <MainSection title="Search" :loading="loading">
        <Head>
            <Title>Search</Title>
        </Head>

        <PostListFeed :posts="searchPosts" />
    </MainSection>
</template>
<script setup>
const { getPosts: getPostsComposable } = usePosts();

const loading = ref(false);
const searchPosts = ref([]);
const searchQuery = useRoute().query.q;

watch(
    () => useRoute().fullPath,
    () => getPosts()
);

onBeforeMount(() => {
    getPosts();
});

async function getPosts() {
    loading.value = true;
    try {
        const { posts } = await getPostsComposable({
            query: searchQuery,
        });

        searchPosts.value = posts;
    } catch (error) {
        alert("出了些問題，請稍後再試");
    } finally {
        loading.value = false;
    }
}
</script>
