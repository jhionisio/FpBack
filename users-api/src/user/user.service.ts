/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
import { User } from './user.entity';
import { UserConverter } from './converters/user-converters';
import { InjectRepository } from '@nestjs/typeorm';

export interface IUser{
  username?: string;
  password?: string;
  email?: string;
  cellPhone?: number;
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUser: UserDTO
    ): Promise<any> {
    this.userRepository.save(createUser);
  }

  async update(userDTO: UserDTO
    ): Promise<any> {
    const userObj = await UserConverter.updateToUserEntity(userDTO);
    this.userRepository.update(userObj.userId, userObj);
  }

  async find(
    ): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(userId: number
    ): Promise<User> {
    return await this.userRepository.findOne({
      where: { userId: userId },
    });
  }

  async findByName(username: string): Promise<IUser | undefined> {
    return this.userRepository.findOne({
      where: { username: username },
    })
  }
}
