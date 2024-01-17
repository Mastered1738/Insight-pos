export class PrivateMessageDTO {
  sender_id: number;
  receiver_id: number;
  content: string;
  timestamp?: Date;
  read_status?: false;
}
