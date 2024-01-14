import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
//import { PrivateMessageDTO } from 'src/dto/chat/private/privateMessage.dto';
import { concatenateUsernamesAndNumbers } from './concat';

@WebSocketGateway()
export class PrivateMessageWebSocketGateway {
  @WebSocketServer()
  server: Server;

  socket: Socket;

  @SubscribeMessage('enter-room')
  async enterRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() enteringMessage: any,
  ) {
    const roomName = concatenateUsernamesAndNumbers(
      enteringMessage.username1,
      enteringMessage.user_id1,
      enteringMessage.username2,
      enteringMessage.user_id2,
    );
    this.server.in(client.id).socketsJoin(roomName);
    console.log(roomName);
  }

  @SubscribeMessage('private-message')
  async onPrivateMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() privateMessage: any,
  ) {
    console.log('Connected client: ' + client.id);
    console.log('====================================');
    console.log(privateMessage);
    console.log('====================================');
    this.server.to(privateMessage.roomName).emit('private-message', {
      content: privateMessage,
    });
  }
}
