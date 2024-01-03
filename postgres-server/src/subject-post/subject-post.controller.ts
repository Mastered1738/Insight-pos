import { Controller } from '@nestjs/common';
import { SubjectPostService } from './subject-post.service';

@Controller('/subject-post')
export class SubjectPostController {
  constructor(private readonly subjectPostService: SubjectPostService) {}
}
