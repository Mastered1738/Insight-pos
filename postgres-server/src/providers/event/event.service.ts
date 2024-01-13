import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDTO } from 'src/dto/event/event.dto';
import { Event } from 'src/entities/event/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async createEvent(eventDto: EventDTO): Promise<Event> {
    return await this.eventRepository.save({
      title: eventDto.title,
      description: eventDto.description,
      start_time: eventDto.start_time,
      end_time: eventDto.end_time,
      subject_id: eventDto.subject_id,
    });
  }

  async getEventsBySubjects(subject_id: number): Promise<Event[]> {
    return await this.eventRepository.find({
      relations: ['subject'],
      where: {
        subject: {
          subject_id: subject_id,
        },
      },
    });
  }
}
