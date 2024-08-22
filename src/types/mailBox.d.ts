export interface PostDataType {
  check: boolean;
  content: string;
  userPostSenderNo: {
    no: number;
    nickname: string;
  };
  userPostReceiverNo: {
    no: number;
    nickname: string;
  };
}

export interface PresentsDataType {
  status: string;
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
  senderNo: number;
  receiverNo: number;
}

export interface MailBoxDataType extends PostDataType, PresentsDataType {
  no: number;
  createdAt: string;
}

export interface SendMailDataType {
  no: number;
  nickname: string;
}
export interface MailBoxBodyEleProps {
  title: string;
  data?: {
    check: boolean;
    content: string;
    createdAt: string;
    no: number;
    userPostReceiverNo: {
      no: number;
      nickname: string;
    };
    userPostSenderNo: {
      no: number;
      nickname: string;
    };
    title: string;
  }[];
}
