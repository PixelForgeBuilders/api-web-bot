import { describe, expect, it, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '../../repositories/in-memory/user/in-memory-users-reposiotry'
import { RegisterUserUseCase } from './register-user-use-case'


let userRepository: InMemoryUsersRepository
let sut: RegisterUserUseCase

describe('Create User', () => {
    beforeEach(() => {
        userRepository = new InMemoryUsersRepository
        sut = new RegisterUserUseCase(userRepository)
    })
    it('Should be able to register a new user', async () => {
        const user = await sut.register({
            name: 'any_name'
        })
        expect(user.id).toEqual(expect.any(String))
    })
})