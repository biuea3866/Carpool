import { ILicense } from "../interfaces/license.interface";

interface RegisterUserDto {
    email: string,
    password: string,
    nickname: string,
    license?: ILicense
};

export { RegisterUserDto };