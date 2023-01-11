import { H3Event } from "h3";
import { getRefreshTokenByToken } from "../../services/refreshTokens";
import { decodeRefreshToken, generateTokens } from "../../utils/jwt";
import { getUserById } from "../../services/user";
import { sendErrorMessage } from "~~/server/utils/statusCodeHandle";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const refreshToken = getCookie(event, "refresh_token") || (event.node.req.headers["refresh_token"] as string);
        if (!refreshToken) {
            return sendErrorMessage(event, { statusCode: 401, statusMessage: "Refresh token is empty" });
        }

        const rToken = await getRefreshTokenByToken(refreshToken);

        if (!rToken) {
            return sendErrorMessage(event, { statusCode: 401, statusMessage: "Refresh token is empty" });
        }

        const token = decodeRefreshToken(refreshToken);
        const user = await getUserById(token.userId);
        if (!user) {
            return sendErrorMessage(event, { statusCode: 401, statusMessage: "User not found" });
        }
        const { accessToken } = generateTokens(user);
        return { access_token: accessToken, status: 200 };
    } catch (error: any) {
        return sendErrorMessage(event, { statusCode: 500, statusMessage: "Internal server error" }, error);
    }
});
