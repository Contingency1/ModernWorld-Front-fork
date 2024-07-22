import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const Token = {
  auth: '/auth',
  async getNaverToken(code: string | null) {
    const result: AxiosResponse = await instance.post(
      `${Token.auth}/naver/login?code=${code}`,
    );
    console.log(result);
    return result.data;
  },

  async getKakaoToken(code: string | null) {
    const result: AxiosResponse = await instance.post(
      `${Token.auth}/kakao/login?code=${code}`,
    );
    return result.data;
  },
};
