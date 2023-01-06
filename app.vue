<template>
    <div :class="{ dark: darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <LoadingPage v-if="isAuthLoading" />
            <div v-if="user" class="min-h-full">
                <div class="mx-auto grid grid-cols-12 md:px-8 lg:max-w-7xl">
                    <!-- Left sidebar -->
                    <div class="col-span-2 md:col-span-2 md:block">
                        <div class="sticky top-0">
                            <SidebarLeft :user="user" @onPost="handleOpenPostModal" @onLogout="handleUserLogout" />
                        </div>
                    </div>
                    <!-- Main content -->
                    <main class="col-span-10 pr-4 md:col-span-7">
                        <NuxtPage />
                    </main>
                    <!-- right sidebar -->
                    <div class="col-span-12 hidden md:col-span-3 md:block">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
            <AuthPage v-else />

            <UIModal :isOpen="postPostModal" @on-close="handleModalClose">
                <PostForm :replyTo="replyPost" showReply :user="user" compact @onSuccess="handleFormSuccess" />
            </UIModal>
        </div>
    </div>
</template>
<script setup>
const { initAuth, useAuthUser, useAuthLoading, logout } = useAuth();
const { closePostPostModal, usePostPostModal, openPostPostModal, useReplyPost } = usePosts();
const { darkMode } = useDarkMode();
const emitter = useEmitter();
const user = useAuthUser();
const isAuthLoading = useAuthLoading();
const postPostModal = usePostPostModal();
const replyPost = useReplyPost();
onBeforeMount(() => {
    try {
        initAuth();
    } catch (error) {
        useRouter().push("/");
    }
});
emitter.$on("replyPost", (post) => {
    openPostPostModal(post);
});
emitter.$on("toggleDarkMode", () => {
    darkMode.value = !darkMode.value;
});
function handleFormSuccess(post) {
    closePostPostModal();

    navigateTo({
        path: `/status/${post.id}`,
    });
}
function handleModalClose() {
    closePostPostModal();
}
function handleOpenPostModal() {
    openPostPostModal(null);
}
function handleUserLogout() {
    logout();
}
</script>
