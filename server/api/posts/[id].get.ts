import { getPostById } from "~/server/services/posts";
import { postTransformer } from "~/server/transformers/post";
import { sendErrorMessage } from "~/server/utils/statusCodeHandle";

export default defineEventHandler(async (event) => {
    try {
        const { id } = event.context.params;
        if (id === "undefined") {
            return sendErrorMessage(event, { statusCode: 400, statusMessage: "Bad request" });
        }
        const post = await getPostById(id, {
            include: {
                author: true,
                mediaFiles: true,
                replyTo: {
                    include: {
                        author: true,
                    },
                },
                replies: {
                    include: {
                        mediaFiles: true,
                        author: true,
                        replyTo: {
                            include: {
                                author: true,
                            },
                        },
                    },
                },
            },
        });
        return {
            post: postTransformer(post),
            statusCode: 200,
        };
    } catch (error: any) {
        return sendErrorMessage(event, { statusCode: 500, statusMessage: "Internal server error" }, error);
    }
});
