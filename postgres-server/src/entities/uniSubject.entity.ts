import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UniSubject')
export class UniSubject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  subject_name: string;

  @Column()
  subject_category: string;

  @Column()
  subject_description: string;

  @ManyToMany(() => User, (user) => user.uniSubject)
  students: User[];
}
