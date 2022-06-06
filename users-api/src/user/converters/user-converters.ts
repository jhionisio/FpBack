/* eslint-disable prettier/prettier */
import { UserDTO } from '../dtos/user.dto';
import { User } from '../user.entity';

export class UserConverter {
  public static async toUserEntity(userDTO: UserDTO): Promise<User> {
    const {
      username,
      email,
      cellPhone,
      password
    } = userDTO;
    const user: User = {
      username,
      email,
      cellPhone,
      password
    };
    return user;
  }

  public static async updateToUserEntity(updateUser: UserDTO): Promise<User> {
    const {
      username,
      email,
      cellPhone,
      password
    } = updateUser;
    const user: User = {
      username,
      email,
      cellPhone,
      password
    };
    return user;
  }
}