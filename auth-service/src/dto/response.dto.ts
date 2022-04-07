import { IUser } from "../interfaces/user.interface";

interface ResponseDto {
    code: number,
    message: string,
    payload: IUser | string | number
};

export { ResponseDto };