import { PrismaUsersRepository } from "@//repositories/prisma/prisma-users-repository"
import { RegisterUserUseCase } from "../user/register-user-use-case"


export const MakeRegisterUserUseCase = () => {
    const userRepository = new PrismaUsersRepository()
    const registerUserUseCase = new RegisterUserUseCase(userRepository)
    return registerUserUseCase
}