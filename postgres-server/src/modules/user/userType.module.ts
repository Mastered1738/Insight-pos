import { Module } from '@nestjs/common';
import { UserType } from 'src/entities/user/userType.entity';
import { UserTypeController } from '../../controllers/user/userType.controller';
import { UserTypeService } from '../../providers/user/userType.service';

@Module({
  imports: [UserType],
  controllers: [UserTypeController],
  providers: [UserTypeService],
  exports: [UserTypeService],
})
export class UserTypeModule {}
