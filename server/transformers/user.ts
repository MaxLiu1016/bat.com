import { UserDto } from "../../types/user";
import { User } from "@prisma/client";
export const userTransformer = (user: User): UserDto => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        handle: "@" + user.username,
    };
};
