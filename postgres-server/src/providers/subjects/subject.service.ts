import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetSubjectByStudentDTO } from 'src/dto/subjects/GetSubjectByStudent.dto';
//import { GetSubjectByStudentDTO } from 'src/dto/uniSubjectDto/GetSubjectByStudent.dto';
import { UniSubject } from 'src/entities/subjects/uniSubject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(UniSubject)
    private subjectRepository: Repository<UniSubject>,
  ) {}

  async getAllSubjects(): Promise<UniSubject[]> {
    return await this.subjectRepository.find();
  }

  async getSubjectsByStudentID(
    getSubjectByStudentDto: GetSubjectByStudentDTO,
  ): Promise<UniSubject[]> {
    return await this.subjectRepository.query(
      `SELECT *
      FROM "UniSubject" us
      JOIN "SubjectMembers" sm ON us.subject_id = sm.subject_id
      WHERE sm.user_id = $1`,
      [getSubjectByStudentDto.user_id],
    );
  }

  async getSubjectByStudentID(
    getSubjectByStudentDto: GetSubjectByStudentDTO,
  ): Promise<UniSubject[]> {
    return await this.subjectRepository.find({
      relations: ['students'],
      where: {
        students: {
          user_id: getSubjectByStudentDto.user_id,
        },
      },
    });
  }
}
