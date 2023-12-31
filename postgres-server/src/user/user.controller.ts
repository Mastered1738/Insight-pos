import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetUserDto } from 'src/dto/userDto/getUser.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAllUsers')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post('/logIn')
  async getUser(@Body() GetUserDto: GetUserDto): Promise<User> {
    return await this.userService.getUser(GetUserDto);
  }
}
