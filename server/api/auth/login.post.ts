import { getUserByUsername } from "../../services/user";
import bcrypt from "bcrypt";
import { generateTokens, setRefreshTokenInCookie } from "../../utils/jwt";
import { userTransformer } from "../../transformers/user";
import { createRefreshToken } from "../../services/refreshTokens";
import { RefreshTokenDto } from "~/types/refreshToken";
import { User } from "@prisma/client";
import { sendErrorMessage } from "~~/server/utils/statusCodeHandle";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { username, password } = body;

    if (!username || !password) {
        return sendErrorMessage(event, { statusCode: 400, statusMessage: "Invalid params" });
    }

    const user: User | null = await getUserByUsername(username);
    if (!user) {
        return sendErrorMessage(event, { statusCode: 400, statusMessage: "Username or password is invalid" });
    }

    const doesThePasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesThePasswordMatch) {
        return sendErrorMessage(event, { statusCode: 400, statusMessage: "Username or password is invalid" });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    const refreshTokenData: object = {
        token: refreshToken,
        userId: user.id,
    };
    await createRefreshToken(refreshTokenData);
    setRefreshTokenInCookie(event, refreshToken);
    return {
        access_token: accessToken,
        user: userTransformer(user),
    };
});
