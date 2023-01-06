import formidable from "formidable";
import { postTransformer } from "~~/server/transformers/post.js";
import { createPost } from "~~/server/services/posts";
import { createMediaFile } from "~/server/services/mediaFiles";
import { uploadToCloudinary } from "~/server/utils/cloudinary";
import { sendErrorMessage } from "~~/server/utils/statusCodeHandle";

export default defineEventHandler(async (event) => {
    try {
        const form = formidable({});
        const response = await new Promise((resolve, reject) => {
            form.parse(event.node.req, (err: any, fields: any, files: any) => {
                if (err) {
                    reject(err);
                }
                resolve({ fields, files });
            });
        });
        const { fields, files } = response as any;

        const userId = event.context?.auth?.user?.id;

        const postData = {
            text: fields.text,
            authorId: userId,
        } as any;

        const replyTo = fields.replyTo;

        if (replyTo && replyTo !== "null" && replyTo !== "undefined") {
            postData.replyToId = replyTo;
        }

        const post = await createPost(postData);

        const filePromises = Object.keys(files).map(async (key) => {
            const file = files[key];

            const cloudinaryResource = (await uploadToCloudinary(file.filepath)) as any;

            return createMediaFile({
                url: cloudinaryResource.secure_url,
                providerPublicId: cloudinaryResource.public_id,
                userId: userId,
                postId: post.id,
            });
        });

        const postMediafiles = await Promise.all(filePromises);
        post.mediaFiles = postMediafiles;

        return {
            post: postTransformer(post),
            statusCode: 200,
        };
    } catch (error: any) {
        return sendErrorMessage(event, { statusCode: 500, statusMessage: "Internal server error" }, error);
    }
});
