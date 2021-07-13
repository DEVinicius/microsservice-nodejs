import { User } from './../../entities/User.entity';
import { ICreateUserDto } from '../dto/ICreateUser.dto';
import { IUserRepository } from './../IUser.repository';

export class UserRepository implements IUserRepository {
    private userRepository: User[];

    constructor() {
        this.userRepository = [];
    }

    async create(createUserDto: ICreateUserDto): Promise<User> {
        const user = new User();

        Object.assign(user, createUserDto)
        this.userRepository.push(user);

        return user;
    }
}