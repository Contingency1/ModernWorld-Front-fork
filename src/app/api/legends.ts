import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const LEGENDS = {
  path: `/users/my/legends`,

  /** 유저 업적 현황 불러오기 API */
  async getUserLegends(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${LEGENDS.path}`);
    return result.data;
  },

  /** like 목록 불러오기 */
  async getLikeLegends(userNo: number, type?: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`users/${userNo}/likes`, {
      params: { type: type },
    });
    return result;
  },
};

export default LEGENDS;
