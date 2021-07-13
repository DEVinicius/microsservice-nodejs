import { ICreateUserDto } from './../../repositories/dto/ICreateUser.dto';
import { IUserRepository } from './../../repositories/IUser.repository';
import { UserRepository } from './../../repositories/implementation/User.repository';
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private UserRepository:IUserRepository
    ){}

    async execute(createUserDto:ICreateUserDto){
        const user = this.UserRepository.create(createUserDto);

        return user;
    }
}