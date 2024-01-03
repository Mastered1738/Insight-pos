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
      where: {
        username: getUserDto.username,
        password: getUserDto.password,
      },
    });
  }
}
