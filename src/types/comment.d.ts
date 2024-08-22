export interface singleCommentType {
  no?: number;
  content: string;
  createdAt: string;
  commentReceiver?: {
    no: number;
    nickname: string;
  };
  commentSender: {
    no?: number;
    nickname: string;
  };
  _count?: {
    reply: number;
  };
}
