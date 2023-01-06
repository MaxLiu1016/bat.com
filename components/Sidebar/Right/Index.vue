<template>
    <div clas="flex flex-col">
        <!-- Search bar -->
        <div class="relative m-2">
            <div class="absolute flex h-full cursor-pointer items-center pl-4 text-gray-600">
                <div class="h-6 w-6">
                    <SearchIcon @click="handleSearch" />
                </div>
            </div>
            <input
                v-model="search"
                class="flex h-9 w-full items-center rounded-full border border-gray-200 bg-gray-200 pl-12 text-sm font-normal text-black shadow focus:border focus:border-blue-200 focus:bg-gray-100 focus:outline-none dark:border-dim-400 dark:bg-dim-400 dark:text-gray-100 dark:focus:bg-dim-900"
                placeholder="Search tweet"
                type="text"
            />
        </div>

        <!-- Preview Card : What's happening -->
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="text-md font-bold text-gray-800 dark:text-white">{{ whatsHappening.title }}</h2>

                    <p class="text-xs text-gray-400">
                        {{ whatsHappening.count }}
                    </p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- Preview Card : Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="h-10 w-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name" />

                        <div class="ml-2 flex flex-col">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="rounded-full bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
                            Follow
                        </button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-4 text-xs text-gray-500">
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline" @click.prevent="handleToggleDarkMode">Dark mode</a>
                </li>
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline">Cookie Policy</a>
                </li>
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline">Accessability</a>
                </li>
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline">Ads info</a>
                </li>
                <li class="mx-2 inline-block">
                    <a href="#" class="hover:underline">More</a>
                </li>
                <li class="mx-2 inline-block">© 2023 Bat, Inc.</li>
            </ul>
        </footer>
    </div>
</template>
<script setup>
import { SearchIcon } from "@heroicons/vue/outline";
const search = ref("");
const emitter = useEmitter();

function handleSearch() {
    useRouter().push({
        path: "/search",
        query: {
            q: search.value,
        },
    });
}

const whatsHappeningItems = ref([
    {
        title: "SpaceX",
        count: "18.8k Tweets",
    },
    {
        title: "#CodingIsFun",
        count: "8.8k Tweets",
    },
    {
        title: "#artforall",
        count: "1.8k Tweets",
    },
]);

const whoToFollowItems = ref([
    {
        name: "Joe Biden",
        handle: "@JoeBiden",
        image: "https://picsum.photos/200/200",
    },
    {
        name: "Joe Biden",
        handle: "@JoeBiden",
        image: "https://picsum.photos/200/200",
    },
    {
        name: "Joe Biden",
        handle: "@JoeBiden",
        image: "https://picsum.photos/200/200",
    },
]);

function handleToggleDarkMode() {
    emitter.$emit("toggleDarkMode");
}
</script>
