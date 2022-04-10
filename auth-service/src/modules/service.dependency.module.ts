import { ErrorHandler } from "../error/error.handler";
import { AuthRepository } from "../repository/auth.repository";
import { JwtUtils } from "../utils/jwt.utils";
import { PasswordUtils } from '../utils/password.utils';

type AuthServiceDependency = {
    authRepository: AuthRepository,
    jwtUtils: JwtUtils,
    passwordUtils: PasswordUtils,
    errorHandler: ErrorHandler
};

export { AuthServiceDependency };