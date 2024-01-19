import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GroupMessageDTO } from 'src/dto/chat/group/groupMessage.dto';
//import { PrivateMessageDTO } from 'src/dto/chat/private/PrivateMessage.dto';
import { ChatGroupService } from 'src/providers/chat/group/ChatGroup.service';
import { GroupMessageService } from 'src/providers/chat/group/group-message.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GroupMessageWebSocketGateway {
  constructor(
    private groupMessageService: GroupMessageService,
    private chatGroupService: ChatGroupService,
  ) {}

  @WebSocketServer()
  server: Server;

  socket: Socket;

  @SubscribeMessage('enter-group-room')
  async enterRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: any,
  ) {
    const group = await this.chatGroupService.getGroupByID(message.group_id);

    this.server.in(client.id).socketsJoin(group.group_name);
    console.log('====================================');
    console.log(client.id);
    console.log('====================================');
  }

  @SubscribeMessage('group-message')
  async onPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() groupMessage: GroupMessageDTO,
  ) {
    const group = await this.chatGroupService.getGroupByID(
      groupMessage.group_id,
    );

    const response = await this.groupMessageService.createMessage(groupMessage);

    this.server.to(group.group_name).emit('group-message', {
      response,
    });
  }
}
