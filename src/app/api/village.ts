import instance from './axiosInstance';
import { VillageParamsType } from '@/types/village';

/**
 * 마을에 있는 유저 불러오는 API
 * @pageNo 페이지번호 @take 한 번에 몇명의 유저를 불러올 것인가 @orderByField 정렬방식 @animal 개냐 고양이냐 @nickname 검색어
 */
export const VILLAGE = {
  async getVillageUser(params: VillageParamsType): Promise<any> {
    const { page, take, orderByField, animal, nickname } = params;

    const queryParams: VillageParamsType = { page, take, animal };

    orderByField ? (queryParams.orderByField = orderByField) : null;

    nickname ? (queryParams.nickname = nickname) : null;

    const result = await instance.get(`users`, {
      params: queryParams,
    });
    return result.data;
  },
};
