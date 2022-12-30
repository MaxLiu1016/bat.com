// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        evironment: process.env.EVIRONMENT === "development" ? true : false,
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    },
    build: {
        transpile: ["@heroicons/vue"],
    },
});
