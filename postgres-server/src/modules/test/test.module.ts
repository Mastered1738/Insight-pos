import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from 'src/controllers/test/test.controller';
import { Test } from 'src/entities/test/test.entity';
import { TestService } from 'src/providers/test/test.service';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
