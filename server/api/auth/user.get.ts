import { userTransformer } from "../../transformers/user";
import { UserDto } from "~/types/user";

export default defineEventHandler((event): { user: UserDto } => {
    return {
        user: userTransformer(event.context.auth?.user),
    };
});
