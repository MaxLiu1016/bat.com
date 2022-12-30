import { errorDto } from "~/types/error";
import { sendError, H3Event } from "h3";
export const sendErrorMessage = (event: H3Event, errorData: errorDto) => {
    sendError(event, createError(errorData));
};
