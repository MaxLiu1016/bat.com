import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../services/user";
import { sendErrorMessage } from "../utils/statusCodeHandle.js";

export default defineEventHandler(async (event) => {
    const endpoints = [
        "/api/auth/user",
        // "/api/user/tweets",
        // "/api/tweets",
        // "/api/tweets/:id"
    ];
    const isHandledByThisMiddleware = endpoints.some((endopoint) => {
        const pattern = new UrlPattern(endopoint);
        const url = event.node.req.url || "";
        return pattern.match(url);
    });
    if (!isHandledByThisMiddleware) {
        return;
    }
    const token = event.node.req.headers["authorization"]?.split(" ")[1] || "";
    const decoded = decodeAccessToken(token);
    if (!decoded) {
        sendErrorMessage(event, { statusCode: 401, statusMessage: "Unauthorized" });
    }
    try {
        const userId = decoded.userId;
        const user = await getUserById(userId);
        event.context.auth = { user };
    } catch (error) {
        return;
    }
});
