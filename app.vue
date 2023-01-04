<template>
    <div :class="{ dark: darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <LoadingPage v-if="isAuthLoading" />
            <div v-else-if="user" class="min-h-full">
                <div class="mx-auto grid grid-cols-12 md:px-8 lg:max-w-7xl">
                    <!-- Left sidebar -->
                    <div class="col-span-2 md:col-span-2 md:block">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
                    <!-- Main content -->
                    <main class="col-span-10 pr-4 md:col-span-7">
                        <router-view />
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
        </div>
    </div>
</template>
<script setup>
const { initAuth, useAuthUser, useAuthLoading } = useAuth();
const { darkMode } = useDarkMode();
const user = useAuthUser();
const isAuthLoading = useAuthLoading();
onBeforeMount(() => {
    initAuth();
});
</script>
