import instance from './axiosInstance';

interface villageType {
  pageNo: number;
  take: number;
  orderByField?: string;
  animal?: string;
  nickname?: string;
}

export const Village = {
  async getVillageUser(params: villageType): Promise<any> {
    const result = await instance.get(`users`, {
      params: {
        pageNo: params.pageNo,
        take: params.take,
        orderByField: params.orderByField,
        animal: params.animal,
        nickname: params.nickname,
      },
    });
    return result.data;
  },
};
