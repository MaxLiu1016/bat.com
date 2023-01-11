export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        const { useAuthUser, initAuth } = useAuth();
        try {
            await initAuth();
        } catch (error) {
            return navigateTo("/login");
        }
        const user = useAuthUser();
        if (user.value) {
            if (to.path === "/login") {
                useRouter().push("/");
            }
        }
        if (!user.value) {
            useRouter().push("/login");
        }
    }
});
