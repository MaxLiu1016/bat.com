<template>
    <div>
        <MainSection title="Home" :loading="loading">
            <Head>
                <Title>Home / Bat</Title>
            </Head>

            <div class="border-b" :class="borderColor">
                <PostForm :user="user" @on-success="handleFormSuccess" />
            </div>

            <PostListFeed :posts="homePosts" />
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
    homePosts.value.unshift(post);
    // navigateTo({
    //     path: `/status/${post.id}`,
    // });
}
</script>
