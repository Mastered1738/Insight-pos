import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserByUsernameAndPasswordDto } from 'src/dto/user/getUserbyUsername&Password.dto';
import { User } from 'src/entities/user/user.entity';
import { ILike, Repository } from 'typeorm';
import { StopWatch } from 'stopwatch-node';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(PrivateMessage)
    private privateMessageRepository: Repository<PrivateMessage>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    console.log('====================================');
    console.log(await this.userRepository.find());
    console.log('====================================');
    return await this.userRepository.find();
  }

  async getUsersbyUsername(username: string): Promise<User[]> {
    return await this.userRepository.find({
      where: {
        username: ILike(`%${username}%`),
      },
      order: {
        username: 'ASC',
      },
      select: {
        user_id: true,
        username: true,
        password: false,
        cover_file: false,
        profile_file: true,
      },
      take: 5,
    });
  }

  async getUser(getUserDto: GetUserByUsernameAndPasswordDto): Promise<User> {
    const stopwatch = new StopWatch('stopwatch');
    stopwatch.start();
    const foundUser = await this.userRepository.findOne({
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
        profile_file: true,
        cover_file: true,
      },
    });
    stopwatch.stop();
    console.log('====================================');
    console.log(stopwatch.getTotalTime());
    console.log(foundUser.username);
    console.log('====================================');
    return foundUser;
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

  async updateUserProfile(
    user_id: number,
    updatedData: { cover_file?: Buffer; profile_file?: Buffer },
  ): Promise<User> {
    const updateProfile = await this.userRepository.update(
      {
        user_id: user_id,
      },
      updatedData,
    );

    if (updateProfile.affected === 0) {
      throw new NotFoundException('Not found');
    }

    return this.userRepository.findOne({
      where: {
        user_id: user_id,
      },
    });
  }

  async getUserChats(user_id: number): Promise<User[]> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.private_messages_sender', 'sentMessages')
      .leftJoinAndSelect('user.private_messages_receiver', 'receivedMessages')
      .where('receivedMessages.receiver_id != :userId', { userId: user_id })
      .andWhere('receivedMessages.sender_id = :userId', { userId: user_id })
      .orWhere('sentMessages.sender_id != :userId', { userId: user_id })
      .andWhere('sentMessages.receiver_id = :userId', { userId: user_id })
      .andWhere('user.user_id != :userId', { userId: user_id })
      .select([
        'user.user_id',
        'user.email',
        'user.username',
        'user.profile_file',
      ])
      .getMany();
  }
}
