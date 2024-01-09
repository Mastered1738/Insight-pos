import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'UniSubject' })
export class UniSubject {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  subject_name: string;

  @Column()
  subject_category: string;

  @Column({ nullable: true })
  subject_description: string;

  @ManyToMany(() => User, (user) => user.uniSubject)
  students: User[];
}
