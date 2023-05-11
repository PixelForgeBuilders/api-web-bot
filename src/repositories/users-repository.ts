export interface UserRequest {
    name: string   
}

export interface UserResponse {
    id: string
    name: string
}

export interface UsersRepository {
    create: (data: UserRequest) => Promise<UserResponse> 
    findById: (id: string) => Promise<UserResponse | null>    
}
