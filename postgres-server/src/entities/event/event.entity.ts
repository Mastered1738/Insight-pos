import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UniSubject } from '../subjects/uniSubject.entity';

@Entity({ name: 'Event' })
export class Event {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  start_time: Date;

  @Column({ type: 'timestamp' })
  end_time: Date;

  @ManyToOne(() => UniSubject, (subject) => subject.event)
  @JoinColumn({
    name: 'subject_id',
    referencedColumnName: 'subject_id',
  })
  subject: UniSubject;
}
