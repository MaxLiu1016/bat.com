// import { sendError } from "h3";
import { sendErrorMessage } from "~~/server/utils/statusCodeHandle";
import { createUser, checkUserByUsername } from "../../services/user";
import { userTransformer } from "../../transformers/user";

const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { username, email, password, repeatPassword, name } = body;
        if (!username || !email || !password || !repeatPassword || !name) {
            return sendErrorMessage(event, { statusCode: 400, statusMessage: "Invalid params" });
        }

        if (password !== repeatPassword) {
            return sendErrorMessage(event, { statusCode: 400, statusMessage: "Invalid params" });
        }

        if (await checkUserByUsername(username)) {
            return sendErrorMessage(event, { statusCode: 400, statusMessage: "Invalid params" });
        }

        const userData = {
            username,
            email,
            password,
            name,
            profileImage: "https://picsum.photos/200/200",
        };

        const user = await createUser(userData);

        return {
            body: userTransformer(user),
        };
    } catch (error) {
        return sendErrorMessage(event, { statusCode: 500, statusMessage: "Internal server error" });
    }
});
