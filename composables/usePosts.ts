export default () => {
    const usePostPostModal = () => useState("post_post_modal", () => false);
    const useReplyPost = () => useState("reply_post", () => null);

    const closePostPostModal = () => {
        const postPostModal = usePostPostModal();
        postPostModal.value = false;
    };

    const setReplyTo = (post: any) => {
        const replyPost = useReplyPost();
        replyPost.value = post;
    };

    const openPostPostModal = (post = null) => {
        const postPostModal = usePostPostModal();
        postPostModal.value = true;

        setReplyTo(post);
    };

    const postPost = (formData: any) => {
        const form = new FormData();

        form.append("text", formData.text);
        form.append("replyTo", formData.replyTo);

        formData.mediaFiles.forEach((mediaFile: any, index: any) => {
            form.append("media_file_" + index, mediaFile);
        });

        return useFetchApi("/api/user/post", {
            method: "POST",
            body: form,
        });
    };

    const getPosts = (params = {}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi("/api/posts", {
                    method: "GET",
                    params,
                });
                console.log(response);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getPostById = (postId: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi(`/api/posts/${postId}`);

                resolve(response);
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        postPost,
        getPosts,
        getPostById,
        closePostPostModal,
        usePostPostModal,
        openPostPostModal,
        useReplyPost,
    };
};
