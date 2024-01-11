import { Module } from '@nestjs/common';
import { ProfilePostService } from '../../providers/user/profile-post.service';
import { ProfilePostController } from '../../controllers/user/profile-post.controller';
import { ProfilePost } from 'src/entities/user/profilePost.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePost])],
  controllers: [ProfilePostController],
  providers: [ProfilePostService],
  exports: [ProfilePostService],
})
export class ProfilePostModule {}
