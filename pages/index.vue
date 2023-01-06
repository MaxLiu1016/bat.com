<template>
    <div>
        <MainSection title="Home" :loading="loading">
            <Head>
                <Title>Home / Bat</Title>
            </Head>

            <div class="border-b" :class="borderColor">
                <PostForm :user="user" @on-success="handleFormSuccess" />
            </div>
            <PostListFeed v-model:posts="homePosts" :loading-more="false" />
        </MainSection>
    </div>
</template>
<script setup>
const { borderColor } = useStyleConfig();
const { getPosts } = usePosts();

const loading = ref(false);
const homePosts = ref([]);
const { useAuthUser } = useAuth();

const user = useAuthUser();

onBeforeMount(async () => {
    loading.value = true;
    try {
        const { posts } = await getPosts();
        homePosts.value = posts;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
});

async function handleFormSuccess(post) {
    try {
        const { posts } = await getPosts();
        homePosts.value = posts;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
    // navigateTo({
    //     path: `/status/${post.id}`,
    // });
}
</script>
