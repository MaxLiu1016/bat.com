<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="h-10 w-10">
                <LogoBat />
            </div>
        </div>
        <h1 class="mt-2 text-center text-primary">登入</h1>
        <NuxtLink class="mt-1 block text-center text-gray-700" to="/register">去註冊</NuxtLink>
        <div class="space-y-6 pt-5">
            <UIInput v-model="data.username" label="Username" placeholder="@username" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />

            <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled"> Login </UIButton>
        </div>
    </div>
</template>
<script setup>
const data = reactive({
    username: "",
    password: "",
    loading: false,
});

async function handleLogin() {
    const { login } = useAuth();
    data.loading = true;
    try {
        await login({
            username: data.username,
            password: data.password,
        });
        navigateTo({
            path: "/",
        });
    } catch (error) {
        alert("帳號或是密碼有誤 :(", error);
    } finally {
        data.loading = false;
    }
}

const isButtonDisabled = computed(() => {
    return !data.username || !data.password || data.loading;
});
</script>
