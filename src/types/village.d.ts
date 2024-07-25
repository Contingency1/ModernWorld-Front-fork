export interface VillageParamsType {
  page: number;
  take: number;
  orderByField?: string;
  animal?: string;
  nickname?: string;
}

export interface VillageData {
  accumulation: number;
  characterLocker: Array<{ character: { image: string } }>;
  createdAt: string;
  description: string;
  legend: { likeCount: number };
  nickname: string;
  accumulationPoint: number;
}
