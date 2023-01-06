<template>
    <div class="flex h-screen flex-col items-center">
        <div class="my-2 w-min rounded-full p-3 hover:bg-blue-50 dark:hover:bg-white/20 xl:ml-3 xl:self-start" :class="defaultTransition">
            <nuxtLink to="/">
                <div class="h-8 w-8">
                    <LogoBat />
                </div>
            </nuxtLink>
        </div>
        <div class="mt-2 space-y-3">
            <SidebarLeftTab v-for="tab in tabs" :key="tab.name" :active="tab.active">
                <template v-slot:icon>
                    <component :is="tab.icon"></component>
                </template>
                <template v-slot:name> {{ tab.name }} </template>
            </SidebarLeftTab>

            <div class="hidden xl:block">
                <UIButton liquid size="lg" @onClick="emits('onPost')">
                    <span class="font-bold"> post </span>
                </UIButton>
            </div>
            <div class="flex justify-center xl:hidden">
                <UIButton @onClick="emits('onPost')">
                    <div class="h-4 w-4 font-bold">
                        <PencilIcon />
                    </div>
                </UIButton>
            </div>
        </div>
        <div
            class="mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row items-center justify-center rounded-full px-2 py-2 hover:bg-gray-100 dark:hover:bg-dim-800 xl:w-full"
            :class="defaultTransition"
            @click="emits('onLogout')"
        >
            <div class="flex flex-row">
                <UIAvatar :background-color="props.user.profileBackground" :text="props.user.name" />
                <div class="ml-2 hidden flex-col xl:block">
                    <h1 class="flex text-sm font-bold text-gray-800 dark:text-white">
                        <div>{{ user.name }}</div>
                        <div class="ml-2 text-red-400">登出</div>
                    </h1>
                    <p class="flex text-sm text-gray-400">
                        {{ user.handle }}
                    </p>
                </div>
            </div>

            <!-- ICON -->
            <div class="ml-auto hidden xl:block">
                <div class="h-6 w-6">
                    <ChevronDownIcon />
                </div>
            </div>
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
    PencilIcon,
} from "@heroicons/vue/outline";

const { defaultTransition } = useStyleConfig();
const emits = defineEmits(["onPost", "onLogout"]);
const tabs = [
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
];
const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});
</script>
