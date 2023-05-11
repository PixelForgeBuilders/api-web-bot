import { randomUUID } from 'node:crypto'
import { UserRequest, UserResponse, UsersRepository } from '../../users-repository';

export class InMemoryUsersRepository implements UsersRepository {
    public items: UserResponse[] = []
    create = async (data: UserRequest): Promise<UserResponse> => {
        const user = {
            id: randomUUID(),
            name: data.name,
        }
        this.items.push(user)
        return user
    }
    findById = async (id: string): Promise<UserResponse | null> => {
        const user = this.items.find(item => item.id === id) 
        if (!user) {
            return null
        }
        return user
      }
    }
