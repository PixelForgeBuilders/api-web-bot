import { UserRequest, UserResponse, UsersRepository } from "../../repositories/users-repository";
import { UserAlreadyExistsError } from "../error/user-already-exists-error";


export class RegisterUserUseCase {
    constructor (private readonly userRepository: UsersRepository) {}
    register = async (data: UserRequest): Promise<UserResponse> => {   
    
        const user = await this.userRepository.create(data)
        return user
    }
}