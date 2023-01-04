export const mediaFileTransformer = (mediFile: any) => {
    return {
        id: mediFile.id,
        url: mediFile.url,
    };
};
