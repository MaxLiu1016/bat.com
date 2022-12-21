<template>
    <div :class="{ dark: darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div class="mx-auto grid grid-cols-12 md:px-8 lg:max-w-7xl">
                    <!-- Left sidebar -->
                    <div class="xs-col-span-1 hidden md:block xl:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
                    <!-- main content -->
                    <main class="col-span-12 bg-blue-50 md:col-span-8 xl:col-span-6">124</main>
                    <!-- right sidebar -->
                    <div class="hidden bg-red-200 md:col-span-3 md:block xl:col-span-4">
                        <div class="sticky top-0">
                            <div>right bar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { darkMode } = useDarkMode();
</script>
