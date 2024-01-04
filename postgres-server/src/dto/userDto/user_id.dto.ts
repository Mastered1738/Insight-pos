import { IsInt } from 'class-validator';

export class user_id_DTO {
  @IsInt()
  user_id: number;
}
