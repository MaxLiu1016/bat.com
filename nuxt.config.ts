// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }],
            link: [
                {
                    rel: "Shortcut Icon",
                    type: "image/x-icon",
                    href: "/favicon.ico",
                },
            ],
        },
    },
    modules: ["@nuxtjs/tailwindcss"],
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        debug: process.env.EVIRONMENT === "development" ? true : false,
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
        // Cloudinary
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    build: {
        transpile: ["@heroicons/vue"],
    },
});
