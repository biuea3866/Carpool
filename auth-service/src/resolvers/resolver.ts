import { CheckEmailDto } from "../dto/check.email.dto";
import { CheckNicknameDto } from "../dto/check.nickname.dto";
import { DeleteUserDto } from "../dto/delete.user.dto";
import { GetRiderInfoDto } from "../dto/get.rider.info.dto";
import { LoginUserDto } from "../dto/login.user.dto";
import { ModifyUserDto } from "../dto/modify.user.dto";
import { RegisterUserDto } from "../dto/register.user.dto";
import { ResponseDto } from "../dto/response.dto";

const authService: AuthService = new AuthService();
const resolvers = {
    Query: {
        getUser: async (context: any): Promise<ResponseDto> => {
            return await authService.getUser(context);
        },
        getRiderInfo: async (
            context: any,
            args: GetRiderInfoDto
        ): Promise<ResponseDto> => {
            return await authService.getOtherUser(context, args);
        },
        checkEmail: async (args: CheckEmailDto): Promise<ResponseDto> => {
            return await authService.checkEmail(args);
        },
        checkNickname: async (args: CheckNicknameDto): Promise<ResponseDto> => {
            return await authService.checkNickname(args);
        },
    },
    Mutation: {
        loginUser: async (args: LoginUserDto): Promise<ResponseDto> => {
            return await authService.login(args);
        },
        logout: async (context: any): Promise<ResponseDto> => {
            return await authService.logout(context);
        }, 
        register: async (args: RegisterUserDto): Promise<ResponseDto> => {
            return await authService.register(args);
        },
        modifyUser: async (
            context: any,
            args: ModifyUserDto
        ): Promise<ResponseDto> => {
            return await authService.modifyUser(args, context);
        },
        deleteUser: async (
            context: any,
            args: DeleteUserDto
        ): Promise<ResponseDto> => {
            return await authService.deleteUser(args, context);
        }
    },
};

export { resolvers };