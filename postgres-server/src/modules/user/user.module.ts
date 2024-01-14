import { Module } from '@nestjs/common';
import { UserService } from '../../providers/user/user.service';
import { UserController } from '../../controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';
import { UserType } from 'src/entities/user/userType.entity';
import { PrivateMessage } from 'src/entities/chat/private/privateMessage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserType, PrivateMessage])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
