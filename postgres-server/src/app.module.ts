import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from 'config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
})
export class AppModule {}
