import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserByUsernameAndPasswordDto } from 'src/dto/userDto/getUserbyUsername&Password.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    console.log('====================================');
    console.log(await this.userRepository.find());
    console.log('====================================');
    return await this.userRepository.find();
  }

  async getUser(getUserDto: GetUserByUsernameAndPasswordDto): Promise<User> {
    return await this.userRepository.findOne({
      relations: ['user_type'],
      where: {
        username: getUserDto.username,
        password: getUserDto.password,
      },
      select: {
        user_id: true,
        email: true,
        username: true,
        password: false,
      },
    });
  }

  async getUsersIFollow(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['followers'],
      where: {
        following: {
          user_id: 1,
        },
      },
      select: {
        user_id: true,
        email: true,
        username: true,
        password: false,
        followers: {
          user_id: false,
          email: false,
          username: false,
          password: false,
        },
        following: {
          user_id: false,
          email: false,
          username: false,
          password: false,
        },
      },
    });
  }

  async countAllUsersIAmFollowing(): Promise<number> {
    return await this.userRepository.count({
      relations: ['followers'],
      where: {
        following: {
          user_id: 1,
        },
      },
    });
  }

  async countAllMyFollowers(): Promise<number> {
    return await this.userRepository.count({
      relations: ['following'],
      where: {
        followers: {
          user_id: 1,
        },
      },
    });
  }

  async getUsersWhoFollowMe(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['following'],
      where: {
        followers: {
          user_id: 1,
        },
      },
      select: {
        user_id: true,
        email: true,
        username: true,
        password: false,
        followers: {
          user_id: false,
          email: false,
          username: false,
          password: false,
        },
        following: {
          user_id: false,
          email: false,
          username: false,
          password: false,
        },
      },
    });
  }
}
