export default defineEventHandler(async (event) => {
    let count = 0;
    count += 1;
    return { count: count };
});
