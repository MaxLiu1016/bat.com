import { mediaFileTransformer } from "./mediaFiles";
import { userTransformer } from "./user";
import humanizeDuration from "./humanizeDuration";

export const postTransformer = (post: any): any => {
    return {
        id: post.id,
        text: post.text,
        mediaFiles: !!post.mediaFiles ? post.mediaFiles.map(mediaFileTransformer) : [],
        author: !!post.author ? userTransformer(post.author) : null,
        replies: !!post.replies ? post.replies.map(postTransformer) : [],
        replyTo: !!post.replyTo ? postTransformer(post.replyTo) : null,
        repliesCount: !!post.replies ? post.replies.length : 0,
        postedAtHuman: humanizeDuration(post.createdAt),
    };
};
