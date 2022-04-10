import { CheckEmailDto } from "../dto/check.email.dto";
import { CheckNicknameDto } from "../dto/check.nickname.dto";
import { DeleteUserDto } from "../dto/delete.user.dto";
import { GetRiderInfoDto } from "../dto/get.rider.info.dto";
import { LoginUserDto } from "../dto/login.user.dto";
import { ModifyUserDto } from "../dto/modify.user.dto";
import { RegisterUserDto } from "../dto/register.user.dto";
import { ResponseDto } from "../dto/response.dto";
import { authService } from "../services/auth.service";

const resolvers = {
    Query: {
        getUser: async (context: any): Promise<ResponseDto> => {
            return await authService.getUser(context);
        },
        getRiderInfo: async (
            context: any,
            args: any
        ): Promise<ResponseDto> => {
            const getRiderInfo: GetRiderInfoDto = args.getRiderInfo;

            return await authService.getRiderInfo(
                context, 
                getRiderInfo
            );
        },
        checkEmail: async (args: any): Promise<ResponseDto> => {
            const checkEmailDto: CheckEmailDto = args.checkEmailDto;

            return await authService.checkEmail(checkEmailDto);
        },
        checkNickname: async (args: any): Promise<ResponseDto> => {
            const checkNicknameDto: CheckNicknameDto = args.checkNicknameDto;

            return await authService.checkNickname(checkNicknameDto);
        },
    },
    Mutation: {
        loginUser: async (args: any): Promise<ResponseDto> => {
            const loginUserDto: LoginUserDto = args.loginUserDto;

            return await authService.loginUser(loginUserDto);
        },
        logout: async (context: any): Promise<ResponseDto> => {
            return await authService.logoutUser(context);
        }, 
        register: async (args: any): Promise<ResponseDto> => {
            const registerUserDto: RegisterUserDto = args.registerUserDto;

            return await authService.registerUser(registerUserDto);
        },
        modifyUser: async (
            context: any,
            args: any
        ): Promise<ResponseDto> => {
            const modifyUserDto: ModifyUserDto = args.modifyUserDto;

            return await authService.modifyUser(
                context, 
                modifyUserDto
            );
        },
        deleteUser: async (
            context: any,
            args: any
        ): Promise<ResponseDto> => {
            const deleteUserDto: DeleteUserDto = args.deleteUserDto;

            return await authService.deleteUser(
                context, 
                deleteUserDto
            );
        }
    },
};

export { resolvers };