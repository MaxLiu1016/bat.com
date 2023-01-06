import { UserDto } from "../../types/user";
import { User } from "@prisma/client";
export const userTransformer = (user: User): UserDto => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        // profileImage: generateColorCode(user.username),
        profileBackground: generateColorCode(user.username),
        handle: "@" + user.username,
    };
};
// 利用名字產生色碼
export const generateColorCode = (name: string): string => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        // 所有字元的 Unicode 編碼值加總
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
};
