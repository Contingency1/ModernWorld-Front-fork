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

export interface UserAttendanceDataType {
  no: number;
  nickname: string;
  attendance: {
    [key: number]: [number, number];
  };
}

export interface UserSearchResult {
  data: {
    no: number;
    nickname: string;
    description: string;
    accumulationPoint: number;
    createdAt: string;
    legend: {
      likeCount: number;
    };
    characterLocker: {
      character: {
        no: number;
        image: string;
      };
    }[];
    userAchievement: {
      achievement: {
        title: string;
        level: string;
      };
    }[];
    chance: number;
  }[];
  meta: {
    page: number;
    take: number;
    totalCount: number;
    totalPage: number;
  };
}
