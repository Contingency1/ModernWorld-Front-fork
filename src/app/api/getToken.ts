import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const Token = {
  auth: '/auth',

  async getToken(code: string | null, social: string) {
    try {
      const result: AxiosResponse = await instance.post(
        `${Token.auth}/${social}/login?code=${code}`,
      );
      return result.data;
    } catch (err) {
      alert('로그인 실패 다시 시도해주세요');
    }
  },
};
