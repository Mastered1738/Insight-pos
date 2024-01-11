import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventController } from 'src/controllers/event/event.controller';
import { Event } from 'src/entities/event/event.entity';
import { EventService } from 'src/providers/event/event.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
