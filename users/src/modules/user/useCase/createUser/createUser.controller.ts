import { CreateUserUseCase } from './createUser.useCase';
import { Request, Response } from "express";
import { container } from 'tsyringe';

export class CreateUserController {
    async handle(request:Request, response:Response) {
        const createUserUseCase = container.resolve(CreateUserUseCase);
    
        const { name, email } = request.body;

        const user = await createUserUseCase.execute({
            email,
            name
        });

        return response.status(201).json(
            user
        )
    }
}   