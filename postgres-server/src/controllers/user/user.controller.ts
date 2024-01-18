import {
  Body,
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { UserService } from '../../providers/user/user.service';
import { User } from 'src/entities/user/user.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetUserByUsernameAndPasswordDto } from 'src/dto/user/getUserbyUsername&Password.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { user_id_DTO } from 'src/dto/user/user_id.dto';
import { GetUserByUsernameDTO } from 'src/dto/user/getUserByUsername.dto';

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

  @Post('/getUsersbyUsername')
  async getUsersbyUsername(
    @Body() usernameDTO: GetUserByUsernameDTO,
  ): Promise<User[]> {
    return await this.userService.getUsersbyUsername(usernameDTO.username);
  }

  @Post('/updateUserProfile')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover_file', maxCount: 1 },
      { name: 'profile_file', maxCount: 1 },
    ]),
  )
  async updateUserProfile(
    @UploadedFiles()
    files: {
      cover_file?: Express.Multer.File[];
      profile_file?: Express.Multer.File[];
    },
    @Body() body: { user_id: string },
  ): Promise<User> {
    const user_id_parsed = parseInt(body.user_id);

    console.log('Received files:', files);

    const updateData: {
      cover_file?: Buffer;
      profile_file?: Buffer;
    } = {};

    if (files.cover_file && files.cover_file[0]?.buffer) {
      updateData.cover_file = files.cover_file[0].buffer;
    }

    if (files.profile_file && files.profile_file[0]?.buffer) {
      updateData.profile_file = files.profile_file[0].buffer;
    }

    return await this.userService.updateUserProfile(user_id_parsed, updateData);
  }

  @Post('/get-private-messages')
  async getUserChats(@Body() user_id_DTO: user_id_DTO): Promise<User[]> {
    return await this.userService.getUserChats(user_id_DTO.user_id);
  }
}
