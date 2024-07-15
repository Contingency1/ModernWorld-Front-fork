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
