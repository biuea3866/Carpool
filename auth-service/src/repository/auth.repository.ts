import { DATABASE_ERROR, DELTED_USER, DUPLICATED_EMAIL, DUPLICATED_NICKNAME, EXCEPTION_ERROR, FAILED_TO_CREATE_USER, FOUND_USER, SIGNED_UP, UNIQUE_EMAIL, UNIQUE_NICKNAME, UPDATED_LICENSE, UPDATED_NICKNAME, UPDATED_PASSWORD } from "../constants/result.code";
import { ResponseDto } from "../dto/response.dto";
import { ILicense } from "../interfaces/license.interface";
import { IUser } from "../interfaces/user.interface";
import { DRIVER } from "../models/license.role";
import { User } from "../models/user.model";

class AuthRepository {
    constructor() {}

    public async findUserByEmail(email: string): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOne({
                email,
                isDelete: false
            }).then((result: IUser) => {
                return {
                    code: FOUND_USER,
                    message: "Found user!",
                    payload: result
                };  
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async findUserByUserId(userId: string): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOne({
                userId,
                isDelete: false
            }).then((result: IUser) => {
                return {
                    code: FOUND_USER,
                    message: "Found User!",
                    payload: result
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async isExistEmail(email: string): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.exists({
                email,
                isDelete: false
            }).then(result => {
                if(result) {
                    return {
                        code: DUPLICATED_EMAIL,
                        message: "This email has been existed!",
                        payload: null
                    };
                }

                return {
                    code: UNIQUE_EMAIL,
                    message: "This email is unique!",
                    payload: null
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async isExistNickname(nickname: string): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.exists({
                nickname,
                isDelete: false
            }).then(result => {
                if(result) {
                    return {
                        code: DUPLICATED_NICKNAME,
                        message: "This nickname has been existed",
                        payload: null
                    };
                }

                return {
                    code: UNIQUE_NICKNAME,
                    message: "This nickname is unique",
                    payload: null
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            }
        }
    }

    public async createUser(userEntity: IUser): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await new User(userEntity).save()
                                                                       .then(result => {
                                                                           return {
                                                                               code: SIGNED_UP,
                                                                               message: "Successfully save entity in database",
                                                                               payload: result
                                                                           };
                                                                       })
                                                                       .catch(error => {
                                                                           return {
                                                                               code: DATABASE_ERROR,
                                                                               message: error,
                                                                               payload: null
                                                                           };
                                                                       });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async modifyPasswordByUserId(
        userId: string,
        password: string
    ): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOneAndUpdate(
                {
                    userId,
                    isDelete: false
                },
                { $set: { password } },
                { new: true }
            ).then(result => {
                return {
                    code: UPDATED_PASSWORD,
                    message: "Successfully updated password",
                    payload: result
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async modifyNicknameByUserId(
        userId: string,
        nickname: string
    ): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOneAndUpdate(
                {
                    userId,
                    isDelete: false
                }, 
                { $set: { nickname } },
                { new: true }
            ).then(result => {
                return {
                    code: UPDATED_NICKNAME,
                    message: "Successfully updated nickname",
                    payload: result
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async modifyLicenseByUserId(
        userId: string,
        license: ILicense
    ): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOneAndUpdate(
                {
                    userId,
                    isDelete: false
                },
                { 
                    $set: { 
                        license,
                        role: DRIVER 
                    }
                }
            ).then(result => {
                return {
                    code: UPDATED_LICENSE,
                    message: "Successfully update license",
                    payload: result
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }

    public async deleteUser(
        userId: string,
        isDelete: boolean
    ): Promise<ResponseDto> {
        try {
            const responseDto: ResponseDto = await User.findOneAndUpdate(
                { userId },
                { $set: { isDelete } },
                { new: true }
            ).then(result => {
                return {
                    code: DELTED_USER,
                    message: "Successfully delete user!",
                    payload: result
                };
            }).catch(error => {
                return {
                    code: DATABASE_ERROR,
                    message: error.toString(),
                    payload: null
                };
            });

            return responseDto;
        } catch(error) {
            return {
                code: EXCEPTION_ERROR,
                message: error.toString(),
                payload: null
            };
        }
    }
}

const authRepository = new AuthRepository();

export { 
    authRepository,
    AuthRepository
};