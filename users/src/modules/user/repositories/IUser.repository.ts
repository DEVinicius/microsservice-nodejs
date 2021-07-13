import { User } from './../entities/User.entity';
import { ICreateUserDto } from './dto/ICreateUser.dto';
export interface IUserRepository {
    create(createUserDto: ICreateUserDto):Promise<User>;
}