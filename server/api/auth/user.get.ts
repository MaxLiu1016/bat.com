import { userTransformer } from "../../transformers/user";
import { UserDto } from "~/types/user";
import { sendErrorMessage } from "~~/server/utils/statusCodeHandle";

export default defineEventHandler((event): { user: UserDto; statusCode: number } | void => {
    try {
        return {
            user: userTransformer(event.context.auth?.user),
            statusCode: 200,
        };
    } catch (error: any) {
        return sendErrorMessage(event, { statusCode: 500, statusMessage: "Internal server error" }, error);
    }
});
