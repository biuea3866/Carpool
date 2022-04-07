import { ILicense } from "../interfaces/license.interface";

interface ModifyUserDto {
    password?: string,
    nickname?: string,
    license?: ILicense
};

export { ModifyUserDto };