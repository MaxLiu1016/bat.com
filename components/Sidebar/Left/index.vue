<template>
    <div class="flex h-screen flex-col items-center">
        <div class="my-2 w-min rounded-full p-3 hover:bg-blue-50 dark:hover:bg-white/20 xl:ml-3 xl:self-start" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="h-8 w-8">
                    <LogoBat />
                </div>
            </nuxt-link>
        </div>
        <div class="mt-2 space-y-3">
            <SidebarLeftTab v-for="tab in tabs" :key="tab.name" :active="tab.active">
                <template v-slot:icon>
                    <component :is="tab.icon"></component>
                </template>
                <template v-slot:name> {{ tab.name }} </template>
            </SidebarLeftTab>
        </div>
    </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    DocumentTextIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    // PencilIcon,
    // ChevronDownIcon,
} from "@heroicons/vue/outline";

const { defaultTransition } = useTailwindConfig();
const tabs = ref([
    {
        name: "Home",
        icon: HomeIcon,
        active: true,
    },
    {
        name: "Explore",
        icon: HashtagIcon,
        active: false,
    },
    {
        name: "Notifications",
        icon: BellIcon,
        active: false,
    },
    {
        name: "Messages",
        icon: InboxIcon,
        active: false,
    },
    {
        name: "Bookmarks",
        icon: BookmarkIcon,
        active: false,
    },
    {
        name: "Lists",
        icon: DocumentTextIcon,
        active: false,
    },
    {
        name: "Profile",
        icon: UserIcon,
        active: false,
    },
    {
        name: "More",
        icon: DotsCircleHorizontalIcon,
        active: false,
    },
]);
const props = defineProps({});
</script>
