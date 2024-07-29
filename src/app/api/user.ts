import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const USER = {
  path: `/users`,

  /** 유저 정보 불러오기 API */
  async getUserInfo(userId: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/${userId}`);
    return result.data;
  },

  async sendLike(userId: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.post(
        `${USER.path}/${userId}/likes`,
      );
      return result;
    } catch (error: any) {
      return error.response.status;
    }
  },

  async unLike(userId: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(
      `${USER.path}/${userId}/likes`,
    );
    return result;
  },

  async createNickname(): Promise<any> {
    const result: AxiosResponse = await instance.post(`${USER.path}/`);
  },

  async editDescription(s: string): Promise<any> {
    if (!window.confirm('자기소개를 수정하시겠습니까?')) {
      return;
    }
    const result: AxiosResponse = await instance.put(
      `${USER.path}/my/description`,
      {
        description: s,
      },
    );
    return result;
  },
};

export default USER;
