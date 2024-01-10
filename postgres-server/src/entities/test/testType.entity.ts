import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Test } from './test.entity';

@Entity({ name: 'TestType' })
export class TestType {
  @PrimaryGeneratedColumn()
  test_type_id: number;

  @Column()
  type_name: string;

  @Column()
  max_insight_coin_value: number;

  @OneToMany(() => Test, (test) => test.test_type)
  test: Test[];
}
