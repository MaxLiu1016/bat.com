import { errorDto } from "~/types/error";
import { sendError, H3Event } from "h3";
const config = useRuntimeConfig();
export const sendErrorMessage = (event: H3Event, errorData: errorDto, error = { message: "" }) => {
    if (config.debug) errorData.statusMessage = error.message;
    sendError(event, createError(errorData), config.debug);
};
