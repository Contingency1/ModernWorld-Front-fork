export interface UserLeftSectionInfoType {
  nickname: string;
  currentPoint: number;
  accumulationPoint: number;
  legend: {
    likeCount: number;
  };
  characterLocker: {
    character: {
      image: string;
    };
  }[];
  userAchievement: {
    achievement: {
      title: string;
      level: string;
    };
  }[];
}
