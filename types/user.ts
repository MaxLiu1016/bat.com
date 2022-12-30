export type UserDto = {
    id?: number | string | null;
    name: string | null;
    email: string;
    username: string;
    profileImage: string | null;
    handle: string;
    createdAt?: Date;
    updatedAt?: Date;
};
