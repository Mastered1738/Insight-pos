import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './uniSubject/subject.module';
import { GroupModule } from './group/group.module';
import { GroupMessageModule } from './group-message/group-message.module';
import { SubjectPostModule } from './subject-post/subject-post.module';
import { ProfilePostModule } from './profile-post/profile-post.module';
import { PrivateMessageModule } from './private-message/private-message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    SubjectModule,
    GroupModule,
    GroupMessageModule,
    SubjectPostModule,
    ProfilePostModule,
    PrivateMessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
