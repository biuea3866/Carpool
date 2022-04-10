import { DATABASE_ERROR, DUPLICATED_EMAIL, DUPLICATED_NICKNAME, EXCEPTION_ERROR, FAILED_TO_CREATE_USER, FAILED_TO_DELETE_USER, FAILED_TO_UPDATE_LICENSE, FAILED_TO_UPDATE_NICKNAME, FAILED_TO_UPDATE_PASSWORD, NOT_FOUND_USER, NOT_MATCHED_PASSWORD, SIGNED_IN } from "../constants/result.code";
import { LoginUserDto } from "../dto/login.user.dto";
import { ResponseDto } from "../dto/response.dto";
import { AuthServiceDependency } from "../modules/service.dependency.module";
import { authRepository } from "../repository/auth.repository";
import { jwtUtils } from "../utils/jwt.utils";
import { passwordUtils } from '../utils/password.utils';
import { errorHandler } from '../error/error.handler';
import { logger } from "../utils/logger";
import { GetRiderInfoDto } from "../dto/get.rider.info.dto";
import { CheckEmailDto } from "../dto/check.email.dto";
import { CheckNicknameDto } from "../dto/check.nickname.dto";
import { RegisterUserDto } from "../dto/register.user.dto";
import { IUser } from "../interfaces/user.interface";
import { v4 } from 'uuid';
import { DRIVER, PASSENGER } from "../models/license.role";
import { ModifyUserDto } from "../dto/modify.user.dto";
import { DeleteUserDto } from "../dto/delete.user.dto";

class AuthService {
    constructor(private authServiceDependency: AuthServiceDependency) {}

    public async loginUser(loginUserDto: LoginUserDto): Promise<ResponseDto> {
        const {
            email,
            password
        } = loginUserDto;

        try {
            const loginUserResponse: ResponseDto = await this.authServiceDependency.authRepository.findUserByEmail(email);

            if(
                loginUserResponse.code === DATABASE_ERROR || 
                loginUserResponse.code === NOT_FOUND_USER ||
                loginUserResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's loginUser",
                    loginUserResponse.message,
                    loginUserResponse.code
                );
            }

            if(!(await this.authServiceDependency.passwordUtils.checker(password, loginUserResponse.payload.password))) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's loginUser",
                    "Not matched password",
                    NOT_MATCHED_PASSWORD
                );
            }

            const accessToken: string = await this.authServiceDependency.jwtUtils.generator(loginUserResponse.payload.userId);

            logger.info("AuthService's loginUser: " + accessToken);

            return {
                code: SIGNED_IN,
                message: "Token is generated",
                payload: accessToken
            };
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's loginUser",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async getUser(context: any): Promise<ResponseDto> {
        try {
            const userId: string = (await this.authServiceDependency.jwtUtils.verify(context.userId)).data;

            if(!userId) {
                this.authServiceDependency.errorHandler.authenticationError("AuthService's getUser");
            }

            const getUserResponse: ResponseDto = await this.authServiceDependency.authRepository.findUserByUserId(userId);

            if(
                getUserResponse.code === NOT_FOUND_USER || 
                getUserResponse.code === DATABASE_ERROR ||
                getUserResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's getUser",
                    getUserResponse.message,
                    getUserResponse.code
                );
            }

            logger.info("AuthServices' getUser: " + getUserResponse.payload.toString());

            return getUserResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's getUser",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async getRiderInfo(
        context: any,
        getRiderInfo: GetRiderInfoDto    
    ): Promise<ResponseDto> {
        const { riderId } = getRiderInfo;

        try {
            const userId: string = (await this.authServiceDependency.jwtUtils.verify(context.userId)).data;

            if(!userId) {
                this.authServiceDependency.errorHandler.authenticationError("AuthService's getRiderInfo");
            }

            const getRiderInfoResponse: ResponseDto = await this.authServiceDependency.authRepository.findUserByUserId(riderId);

            if(
                getRiderInfoResponse.code === NOT_FOUND_USER || 
                getRiderInfoResponse.code === DATABASE_ERROR ||
                getRiderInfoResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthServices's getRiderInfo",
                    getRiderInfoResponse.message,
                    getRiderInfoResponse.code
                );
            }

            logger.info("AuthService's getRiderInfo: " + getRiderInfoResponse.payload.toString());

            return getRiderInfoResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's getRiderInfo",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async checkEmail(checkEmailDto: CheckEmailDto): Promise<ResponseDto> {
        const { email } = checkEmailDto;

        try {
            const checkEmailResponse: ResponseDto = await this.authServiceDependency.authRepository.isExistEmail(email);

            if(
                checkEmailResponse.code === DUPLICATED_EMAIL ||
                checkEmailResponse.code === DATABASE_ERROR ||
                checkEmailResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's checkEmail",
                    checkEmailResponse.message,
                    checkEmailResponse.code
                );
            }

            logger.info("AuthService's checkEmail" + checkEmailResponse.message);
            
            return checkEmailResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's checkEmail",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async checkNickname(checkNicknameDto: CheckNicknameDto): Promise<ResponseDto> {
        const { nickname } = checkNicknameDto;

        try {
            const checkNicknameResponse: ResponseDto = await this.authServiceDependency.authRepository.isExistNickname(nickname);

            if(
                checkNicknameResponse.code === DUPLICATED_NICKNAME ||
                checkNicknameResponse.code === DATABASE_ERROR ||
                checkNicknameResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's checkEmail",
                    checkNicknameResponse.message,
                    checkNicknameResponse.code
                );
            }

            logger.info("AuthService's checkEmail: " + checkNicknameResponse.message);

            return checkNicknameResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's checkNickname",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async registerUser(registerUserDto: RegisterUserDto): Promise<ResponseDto> {
        const {
            email,
            password,
            nickname,
            license
        } = registerUserDto;

        try {
            const userEntity: IUser = license ? {
                email,
                password: (await this.authServiceDependency.passwordUtils.generator(password)),
                nickname,
                createdAt: new Date().toISOString(),
                role: DRIVER,
                license,
                userId: v4(),
                isDelete: false
            }: {
                email,
                password: (await this.authServiceDependency.passwordUtils.generator(password)),
                nickname,
                createdAt: new Date().toISOString(),
                role: PASSENGER,
                license: null,
                userId: v4(),
                isDelete: false
            };
            const saveUserResponse: ResponseDto = await this.authServiceDependency.authRepository.createUser(userEntity);

            if(
                saveUserResponse.code === FAILED_TO_CREATE_USER ||
                saveUserResponse.code === DATABASE_ERROR ||
                saveUserResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's registerUser",
                    saveUserResponse.message,
                    saveUserResponse.code
                );
            }

            logger.info("AuthService's registerUser: " + saveUserResponse.payload.toString());

            return saveUserResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's registerUser",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async modifyUser(
        context: any,
        modifyUserDto: ModifyUserDto
    ): Promise<ResponseDto> {
        const {
            password,
            nickname,
            license
        } = modifyUserDto;

        try {
            const userId: string = (await this.authServiceDependency.jwtUtils.verify(context.userId)).data;

            if(!userId) {
                this.authServiceDependency.errorHandler.authenticationError("AuthService's modifyUser");
            }

            let modifyUserResponse: ResponseDto;

            if(password) {
                modifyUserResponse = await this.authServiceDependency.authRepository.modifyPasswordByUserId(
                    userId,
                    password
                );
            }

            if(nickname) {
                modifyUserResponse = await this.authServiceDependency.authRepository.modifyNicknameByUserId(
                    userId,
                    nickname
                );
            }

            if(license) {
                modifyUserResponse = await this.authServiceDependency.authRepository.modifyLicenseByUserId(
                    userId,
                    license
                );
            }

            if(
                modifyUserResponse.code === FAILED_TO_UPDATE_LICENSE ||
                modifyUserResponse.code === FAILED_TO_UPDATE_PASSWORD ||
                modifyUserResponse.code === FAILED_TO_UPDATE_NICKNAME ||
                modifyUserResponse.code === DATABASE_ERROR ||
                modifyUserResponse.code === EXCEPTION_ERROR
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's modifyUser",
                    modifyUserResponse.message,
                    modifyUserResponse.code
                );
            }

            logger.info("AuthService's modifyUser: " + modifyUserResponse.payload.toString());

            return modifyUserResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's modifyUser",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }

    public async deleteUser(
        context: any,
        deleteUserDto: DeleteUserDto
    ) {
        const { isDelete } = deleteUserDto;

        try {
            const userId: string = (await this.authServiceDependency.jwtUtils.verify(context.userId)).data;

            if(!userId) {
                this.authServiceDependency.errorHandler.authenticationError("AuthService's deleteUser");
            }

            const deleteUserResponse: ResponseDto = await this.authServiceDependency.authRepository.deleteUser(
                isDelete,
                userId
            );

            if(
                deleteUserResponse.code === FAILED_TO_DELETE_USER ||
                deleteUserResponse.code === DATABASE_ERROR ||
                deleteUserResponse.code === EXCEPTION_ERROR    
            ) {
                this.authServiceDependency.errorHandler.error(
                    "AuthService's deleteUser",
                    deleteUserResponse.message,
                    deleteUserResponse.code
                );
            }

            return deleteUserResponse;
        } catch(error) {
            this.authServiceDependency.errorHandler.error(
                "AuthService's deleteUser",
                error.toString(),
                EXCEPTION_ERROR
            );
        }
    }
}

const authService = new AuthService({
    authRepository,
    jwtUtils,
    passwordUtils,
    errorHandler
});

export { 
    authService,
    AuthService
};