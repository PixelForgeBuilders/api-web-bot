import { MakeRegisterUserUseCase } from '@//use-cases/factories/make-register-user-use-case'
import {FastifyRequest, FastifyReply} from 'fastify'
import {z} from 'zod'


export class RegisterUserController {
   register = async (request:FastifyRequest,  reply: FastifyReply) => {
       const registerUserBodySchema = z.object({
           name: z.string().min(3)
       })
    const {name} = registerUserBodySchema.parse(request.body)
    try {
        const registerUserUseCase = MakeRegisterUserUseCase()
        registerUserUseCase.register({ name})
        return reply.status(201).send()
    } catch (error) {
       console.log(error);
            
    }
}   
}