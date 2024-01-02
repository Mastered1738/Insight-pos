import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './uniSubject/subject.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, SubjectModule],
})
export class AppModule {}
