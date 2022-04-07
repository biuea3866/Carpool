import { ApolloError } from "apollo-server-core";
import { logger } from "../utils/logger";

class ErrorHandler {
    constructor() {}

    public handler(
        method: string,
        message: string,
        code: number
    ) {
        logger.error(method + ": " + message);

        throw new ApolloError(
            message,
            code.toString(), {
                'code_number': code
            }
        );
    }
}

export { ErrorHandler };