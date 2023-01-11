<template>
    <div class="flex h-screen">
        <div class="relative hidden w-0 flex-1 lg:block">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1585194328937-30ffb4529e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
        </div>
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto flex h-full w-full max-w-sm items-center lg:w-96">
                <template v-if="useRoute().name === 'login'">
                    <AuthLoginForm />
                </template>
                <template v-else>
                    <AuthRegisterForm />
                </template>
            </div>
        </div>
    </div>
</template>
<script setup></script>
