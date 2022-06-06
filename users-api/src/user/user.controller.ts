/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LoginDTO } from './dtos/login.dto';
import { UserDTO } from './dtos/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/user-api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @UsePipes()
  async create(
    @Body() userDTO: UserDTO
    ): Promise<any> {
    return await this.userService.create(userDTO);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(req
    ): Promise<any> {
    return req;
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(
    @Body() userDTO: UserDTO
    ): Promise<any> {
    return await this.userService.update(userDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(
  ): Promise<User[]> {
    return await this.userService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getUserById')
  async getUserById(
    @Query('id') id: number,
  ): Promise<User> {
    return await this.userService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getUserByName')
  async getUserByName(
    @Query('username') username: string,
  ): Promise<User | undefined> {
    return await this.userService.findByName(username);
  }
}
