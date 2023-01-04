import jwt_decode from "jwt-decode";
import { UserDto } from "~~/types/user";
export default () => {
    const useAuthToken = () => useState("auth_token");
    const useAuthUser = () => useState("auth_user");
    const useAuthLoading = () => useState("auth_loading", () => true);

    const setToken = (newToken: string) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    };

    const setUser = (newUser: UserDto | "") => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    };

    const setIsAuthLoading = (value: boolean) => {
        const authLoading = useAuthLoading();
        authLoading.value = value;
    };

    const login = ({ username, password }: { username: string; password: string }) => {
        return new Promise(async (resolve, reject) => {
            try {
                setIsAuthLoading(true);
                const data = await $fetch("/api/auth/login", {
                    method: "POST",
                    body: {
                        username,
                        password,
                    },
                });

                setToken(data.access_token);
                setUser(data.user);

                resolve(true);
            } catch (error) {
                reject(error);
            } finally {
                setIsAuthLoading(false);
            }
        });
    };

    const getRefreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch("/api/auth/refresh");
                setToken(data.access_token);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchApi("/api/auth/user");
                setUser(data.user);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const reRefreshAccessToken = () => {
        const authToken = useAuthToken() as any;

        if (!authToken.value) {
            return;
        }

        const jwt = jwt_decode(authToken.value) as any;

        const newRefreshTime = jwt.exp - 60000;

        setTimeout(async () => {
            await getRefreshToken();
            reRefreshAccessToken();
        }, newRefreshTime);
    };

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true);
            try {
                await getRefreshToken();
                await getUser();

                reRefreshAccessToken();

                resolve(true);
            } catch (error) {
                reject(error);
            } finally {
                setIsAuthLoading(false);
            }
        });
    };

    const logout = () => {
        return new Promise<void>(async (resolve, reject) => {
            try {
                await useFetchApi("/api/auth/logout", {
                    method: "POST",
                });
                setToken("");
                setUser("");
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        login,
        useAuthUser,
        useAuthToken,
        initAuth,
        useAuthLoading,
        logout,
    };
};
