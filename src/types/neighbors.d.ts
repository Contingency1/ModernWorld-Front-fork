export interface NeighborsDataType {
  data: {
    no: number;
    createdAt: string;
    status: boolean;
    neighbor: {
      no: number;
      nickname: string;
      image: string;
      description: string | null;
      userAchievement: any[];
    };
  }[];
  meta: {
    page: number;
    take: number;
    totalCount: number;
    totalPage: number;
  };
}
