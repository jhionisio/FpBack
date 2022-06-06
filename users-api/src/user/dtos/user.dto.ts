/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class UserDTO {

  userId?: number;

  @IsNotEmpty()
  username?: string;
  
  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  cellPhone?: number;

  @IsNotEmpty()
  email?: string;
}
