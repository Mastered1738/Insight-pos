import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerGroupPostDTO } from 'src/dto/userServer/serverGroupPost.dto';
import { ServerGroupPost } from 'src/entities/userServer/serverGroupPost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServerGroupPostService {
  constructor(
    @InjectRepository(ServerGroupPost)
    private serverGroupPostRepository: Repository<ServerGroupPost>,
  ) {}

  async getServerGroupPostsByServer(
    server_group_id: number,
  ): Promise<ServerGroupPost[]> {
    return await this.serverGroupPostRepository.find({
      relations: ['server_group'],
      where: {
        server_group: {
          server_group_id: server_group_id,
        },
      },
    });
  }

  async createServerGroupPost(
    serverGroupPostDto: ServerGroupPostDTO,
  ): Promise<ServerGroupPost> {
    return await this.serverGroupPostRepository.save({
      server_group: {
        server_group_id: serverGroupPostDto.server_group_id,
      },
      user: {
        user_id: serverGroupPostDto.user_id,
      },
      content: serverGroupPostDto.content,
      timestamp: serverGroupPostDto.timestamp,
    });
  }
}
