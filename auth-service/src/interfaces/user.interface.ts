import { ILicense } from "./license.interface";

interface IUser {
    email: string,
    password: string,
    nickname: string,
    createdAt: string,
    role: string,
    userId: string,
    isDelete: boolean,
    license: ILicense
};

export { IUser }; 