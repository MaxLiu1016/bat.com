<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="h-10 w-10">
                <LogoBat />
            </div>
        </div>
        <h1 class="mt-2 text-center">註冊</h1>
        <NuxtLink class="block text-center text-gray-700" to="/login">我要去登入</NuxtLink>
        <div class="space-y-6 pt-5">
            <UIInput v-model="data.username" label="Username" placeholder="@username" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />
            <UIInput label="Repest Password" placeholder="********" type="password" v-model="data.repeatPassword" />

            <UIButton @click="handRegister" liquid :disabled="isButtonDisabled"> Login </UIButton>
        </div>
    </div>
</template>
<script setup>
const data = reactive({
    username: "",
    password: "",
    repeatPassword: "",
    loading: false,
});

async function handRegister() {
    const { register } = useAuth();
    data.loading = true;
    try {
        await register({
            username: data.username,
            name: data.username,
            email: data.username + "@bat.com",
            password: data.password,
            repeatPassword: data.repeatPassword,
        });
        navigateTo({
            path: "/",
        });
    } catch (error) {
        // throw error;
        alert("填寫資料有誤 :(", error);
    } finally {
        data.loading = false;
    }
}

const isButtonDisabled = computed(() => {
    return !data.username || !data.password || !data.repeatPassword || data.loading;
});
</script>
