import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const USER = {
  path: `/users`,

  /** 유저 정보 불러오기 API */
  async getUserInfo(userId: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/${userId}`);
    return result.data;
  },
};

export default USER;
