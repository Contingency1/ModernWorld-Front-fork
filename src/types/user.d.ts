<<<<<<< HEAD
export interface DefaultType {
  nickname: string;
  currentPoint: number;
  accumulationPoint: number;
  legend: Legend;
  characterLocker: CharacterLocker[];
  userAchievement: UserAchievement[];
}

export interface CharacterLocker {
  character: Character;
}

export interface Character {
  image: string;
}

export interface Legend {
  likeCount: number;
}

export interface UserAchievement {
  achievement: Achievement;
}

export interface Achievement {
  title: string;
  level: string;
=======
export interface LeftUserInfoType {
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
>>>>>>> 4bebb964f6474b8e01986b29f81b23487797b42a
}
