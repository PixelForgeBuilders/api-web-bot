import { prisma } from "../../lib/prisma";
import { UserRequest, UserResponse, UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
    create = async (data: UserRequest) => {
        const user = await prisma.user.create({ data })
        return user
    }
    findById = async (id: string): Promise<UserResponse | null> => {
        const user = await prisma.user.findUnique({
            where: { id }
        })
        return user
    }

}   