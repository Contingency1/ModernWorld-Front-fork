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
}
