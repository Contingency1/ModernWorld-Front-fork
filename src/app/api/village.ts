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
    const { pageNo, take, orderByField, animal, nickname } = params;

    const queryParams: villageType = { pageNo, take, animal };

    orderByField ? (queryParams.orderByField = orderByField) : null;

    nickname ? (queryParams.nickname = nickname) : null;

    const result = await instance.get(`users`, {
      params: queryParams,
    });
    return result.data;
  },
};
