import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTypeController } from 'src/controllers/test/testType.controller';
import { TestType } from 'src/entities/test/testType.entity';
import { TestTypeService } from 'src/providers/test/testType.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestType])],
  controllers: [TestTypeController],
  providers: [TestTypeService],
  exports: [TestTypeService],
})
export class TestTypeModule {}
