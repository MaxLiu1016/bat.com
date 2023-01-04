import { prisma } from ".";

export const createPost = (postData: any) => {
    return prisma.post.create({
        data: postData,
        include: {
            author: true,
            mediaFiles: true,
        },
    });
};

export const getPosts = (params = {}) => {
    return prisma.post.findMany({
        ...params,
    });
};

export const getPostById = (postId: any, params: any = {}) => {
    return prisma.post.findUnique({
        ...params,
        where: {
            ...params.where,
            id: postId,
        },
    });
};
