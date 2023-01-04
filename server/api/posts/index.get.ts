import { getPosts } from "~/server/services/posts";
import { postTransformer } from "~/server/transformers/post";

export default defineEventHandler(async (event) => {
    const { query } = getQuery(event);

    let primsaQuery = {
        include: {
            author: true,
            mediaFiles: true,
            replies: {
                include: {
                    author: true,
                },
            },
            replyTo: {
                include: {
                    author: true,
                },
            },
        },
        orderBy: [
            {
                createdAt: "desc",
            },
        ],
    };

    if (!!query) {
        primsaQuery = {
            ...primsaQuery,
            where: {
                text: {
                    contains: query,
                },
            },
        } as any;
    }

    const posts = await getPosts(primsaQuery);

    return {
        posts: posts.map(postTransformer),
    };
});
