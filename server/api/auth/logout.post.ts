import { removeRefreshToken } from "~/server/services/refreshTokens";
import { setRefreshTokenInCookie } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    try {
        const refreshToken = getCookie(event, "refresh_token") || "";
        await removeRefreshToken(refreshToken);
    } catch (error) {}

    setRefreshTokenInCookie(event, "");

    return { message: "Done" };
});
