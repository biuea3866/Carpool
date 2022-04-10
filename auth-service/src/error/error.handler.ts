import { ApolloError } from "apollo-server-core";
import { UN_AUTHENTICATION } from "../constants/result.code";
import { logger } from "../utils/logger";

class ErrorHandler {
    constructor() {}

    public error(
        method: string,
        message: string,
        code: number
    ) {
        logger.error(method + ": " + message);

        throw new ApolloError(
            message,
            code.toString(), {
                'code': code
            }
        );
    }

    public authenticationError(method: string) {
        logger.error(method + ": Not Authenticated");

        throw new ApolloError(
            "Not Authenticated",
            UN_AUTHENTICATION.toString(), {
                'code': UN_AUTHENTICATION
            }
        );
    }
}

const errorHandler = new ErrorHandler();

export { 
    errorHandler,
    ErrorHandler 
};