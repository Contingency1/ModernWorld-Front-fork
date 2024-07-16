export interface PresentsType {
  no: number;
  status: string;
  createdAt: string;
  item: {
    name: string;
    image: string;
    description: string;
  };
  userPresentSenderNo: {
    no: number;
    nickname: string;
  };
  userPresentReceiverNo: {
    no: number;
    nickname: string;
  };
}

export interface PostsType {
  no: number;
  check: boolean;
  createdAt: string;
  content: string;
  userPostSenderNo: {
    nickname: string;
  };
  userPostReceiverNo: {
    nickname: string;
  };
  senderNo: number;
  receiverNo: number;
}
