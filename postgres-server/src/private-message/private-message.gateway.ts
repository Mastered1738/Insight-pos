import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class PrivateMessageWebSocketGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('====================================');
      console.log(socket.id);
      console.log('====================================');
    });
  }

  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() messageBody: any) {
    console.log('====================================');
    console.log(messageBody.toString());
    console.log('====================================');
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: 'Content text',
    });
  }
}
