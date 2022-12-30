import { prisma } from ".";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

//確認用戶是否存在
export const checkUserByUsername = async (username: any): Promise<boolean> => {
    //判斷是否存在
    const user: User | null = await getUserByUsername(username);
    if (user) {
        return true;
    }
    return false;
};

export const createUser = (userData: any): Promise<User> => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10),
    };

    return prisma.user.create({
        data: finalUserData,
    });
};

export const getUserByUsername = (username: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            username,
        },
    });
};

export const getUserById = (userId: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
};
