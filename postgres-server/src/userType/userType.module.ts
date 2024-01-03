import { Module } from '@nestjs/common';
import { UserType } from 'src/entities/userType.entity';
import { UserTypeController } from './userType.controller';
import { UserTypeService } from './userType.service';

@Module({
  imports: [UserType],
  controllers: [UserTypeController],
  providers: [UserTypeService],
  exports: [UserTypeService],
})
export class UserTypeModule {}
