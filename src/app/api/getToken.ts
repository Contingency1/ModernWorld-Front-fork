import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const Token = {
  auth: '/auth',
  async getToken(code: string | null, social: string) {
    const result: AxiosResponse = await instance.post(
      `${Token.auth}/${social}/login?code=${code}`,
      {
        params: {
          social: social,
        },
      },
    );
    console.log(result);
    return result.data;
  },
};
