import { prisma } from ".";
import { RefreshToken } from "@prisma/client";

export const createRefreshToken = (refreshToken: any): Promise<RefreshToken> => {
    return prisma.refreshToken.create({
        data: refreshToken,
    });
};

export const getRefreshTokenByToken = (token: string): Promise<RefreshToken | null> => {
    return prisma.refreshToken.findUnique({
        where: {
            token,
        },
    });
};

export const removeRefreshToken = (token: string): Promise<RefreshToken | null> => {
    return prisma.refreshToken.delete({
        where: {
            token: token,
        },
    });
};
