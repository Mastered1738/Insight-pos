import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetUserByUsernameAndPasswordDto } from 'src/dto/userDto/getUserbyUsername&Password.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAllUsers')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post('/logIn')
  async getUser(
    @Body() GetUserDto: GetUserByUsernameAndPasswordDto,
  ): Promise<User> {
    return await this.userService.getUser(GetUserDto);
  }

  @Post('/findUsersIFollow')
  async findUsersIfollow(): Promise<User[]> {
    return await this.userService.getUsersIFollow();
  }

  @Post('/findUsersWhoFollowMe')
  async findUsersWhoFollowMe(): Promise<User[]> {
    return await this.userService.getUsersWhoFollowMe();
  }

  @Post('/countAllMyFollowers')
  async countAllMyFollowers(): Promise<number> {
    return await this.userService.countAllMyFollowers();
  }

  @Post('/countAllUsersIAmFollowing')
  async countAllUsersIAmFollowing(): Promise<number> {
    return await this.userService.countAllUsersIAmFollowing();
  }
}
