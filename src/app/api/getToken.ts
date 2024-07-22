import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const Token = {
  auth: '/auth',
  async getToken(code: string | null, social: string) {
    const result: AxiosResponse = await instance.post(
      `${Token.auth}/${social}/login?code=${code}`,
    );
    return result.data;
  },
};
