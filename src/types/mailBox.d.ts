export interface PresentListType {
  no: number;
  status: string;
  createdAt: string;
  item: {
    name: string;
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

export interface PresentInfo extends PresentListType {
  item: {
    name: string;
    image: string;
    description: string;
  };
}

export interface PostType {
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
