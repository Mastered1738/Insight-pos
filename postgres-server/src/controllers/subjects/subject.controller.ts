import { Body, Controller, Post } from '@nestjs/common';
import { SubjectService } from '../../providers/subjects/subject.service';
import { UniSubject } from 'src/entities/subjects/uniSubject.entity';
import { GetSubjectByStudentDTO } from 'src/dto/subjects/GetSubjectByStudent.dto';

@Controller('/subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post('/getSubjectsByStudent')
  async getSubjectsByStudent(
    @Body() getSubjectByStudentDto: GetSubjectByStudentDTO,
  ): Promise<UniSubject[]> {
    return this.subjectService.getSubjectsByStudentID(getSubjectByStudentDto);
  }

  @Post('/getSubjectByStudent')
  async getSubjectByStudent(
    @Body() getSubjectByStudentDto: GetSubjectByStudentDTO,
  ): Promise<UniSubject[]> {
    return this.subjectService.getSubjectByStudentID(getSubjectByStudentDto);
  }
}
