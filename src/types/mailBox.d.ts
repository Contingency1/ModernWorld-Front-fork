export interface MailBoxDataType {
  no: number;
  status: string;
  check?: boolean;
  createdAt: string;
  item?: {
    name?: string;
    image?: string;
    description?: string;
  };
  content?: string;
  userPresentSenderNo: {
    no: number;
    nickname: string;
  };
  userPresentReceiverNo: {
    no: number;
    nickname: string;
  };
  senderNo?: number;
  receiverNo?: number;
}
