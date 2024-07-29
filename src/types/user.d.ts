export interface UserInfoType {
  nickname: string;
  currentPoint: number;
  accumulationPoint: number;
  description: string;
  image: string;
  legend: {
    likeCount: number;
  };
  characterLocker: [
    {
      character: {
        image: string;
      };
    },
  ];
  userAchievement: [
    {
      achievement: {
        title: string;
        level: string;
      };
    },
  ];
}

export interface UserLegendsType {
  userNo: number;
  attendanceCount: number;
  commentCount: number;
  itemCount: number;
  presentCount: number;
  likeCount: number;
}
