export interface AchievementDataType {
  no: number;
  userNo: number;
  achievementNo: number;
  status: boolean;
  achievement: {
    title: string;
    description: string;
    level: 'one' | 'two' | 'three';
    category: string;
  };
}
