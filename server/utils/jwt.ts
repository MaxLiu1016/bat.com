import { User } from "@prisma/client";
import { H3Event } from "h3";
import jwt from "jsonwebtoken";

const generateAccessToken = (user: User): string => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
        expiresIn: "10m",
    });
};

const generateRefreshToken = (user: User): string => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
        expiresIn: "4h",
    });
};

export const decodeRefreshToken = (token: string): any => {
    const config = useRuntimeConfig();

    try {
        return jwt.verify(token, config.jwtRefreshSecret);
    } catch (error) {
        return null;
    }
};

export const decodeAccessToken = (token: string): any => {
    const config = useRuntimeConfig();

    try {
        return jwt.verify(token, config.jwtAccessSecret);
    } catch (error) {
        return null;
    }
};

export const generateTokens = (user: User) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
};

export const setRefreshTokenInCookie = (event: H3Event, token: string): void => {
    setCookie(event, "refresh_token", token, {
        // httpOnly: true,
        // sameSite: true,
    });
};
