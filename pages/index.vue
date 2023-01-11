<template>
    <MainSection title="Home" :loading="loading">
        <Head>
            <Title>Home / Bat </Title>
        </Head>
        <div class="border-b" :class="borderColor">
            <PostForm :user="user" @on-success="handleFormSuccess" />
        </div>
        <PostListFeed v-model:posts="homePosts" :loading-more="false" />
    </MainSection>
</template>
<script setup>
definePageMeta({
    middleware: ["auth"],
});
const loading = ref(false);
const homePosts = ref([]);
const { borderColor } = useStyleConfig();
const { getPosts } = usePosts();
const { useAuthUser } = useAuth();
const user = useAuthUser();
onBeforeMount(async () => {
    loading.value = true;
    try {
        const { posts } = await getPosts();
        homePosts.value = posts;
    } catch (error) {
        alert("出了一些問題 :(", error);
    } finally {
        loading.value = false;
    }
});

async function handleFormSuccess(post) {
    try {
        const { posts } = await getPosts();
        homePosts.value = posts;
    } catch (error) {
        alert("出了一些問題 :(", error);
    } finally {
        loading.value = false;
    }
}
</script>
