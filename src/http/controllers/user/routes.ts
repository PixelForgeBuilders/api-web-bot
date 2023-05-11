import { FastifyInstance } from "fastify"
import { RegisterUserController } from "./register-user-controller"


const registerController = new RegisterUserController()

export const usersRoutes = async (app: FastifyInstance) => {
    app.post('/users', registerController.register)
}