import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { concatenateNumbers } from './concat';
import { PrivateMessageService } from 'src/providers/chat/private/private-message.service';
import { PrivateMessageDTO } from 'src/dto/chat/private/PrivateMessage.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PrivateMessageWebSocketGateway {
  constructor(private privateMessageService: PrivateMessageService) {}

  @WebSocketServer()
  server: Server;

  socket: Socket;

  @SubscribeMessage('enter-room')
  async enterRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() enteringMessage: any,
  ) {
    const roomName = concatenateNumbers(
      enteringMessage.user_id1,
      enteringMessage.user_id2,
    );
    this.server.in(client.id).socketsJoin(roomName);
    console.log(roomName);
  }

  @SubscribeMessage('private-message')
  async onPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() privateMessage: PrivateMessageDTO,
  ) {
    const roomName = concatenateNumbers(
      privateMessage.sender_id,
      privateMessage.receiver_id,
    );
    console.log('Connected client: ' + client.id);
    console.log('====================================');
    console.log(privateMessage);
    console.log('====================================');
    const response =
      await this.privateMessageService.createMessage(privateMessage);
    this.server.to(roomName).emit('private-message', {
      response,
    });
  }
}
