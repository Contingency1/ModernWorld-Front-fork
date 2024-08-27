import axios, { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { ErrorType } from '@/types/error';
import { HTTP_STATUS } from '@/utils/httpStatusCode';
import { cookies } from 'next/headers';

const refreshInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL,
  timeout: 4000,
});

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

  async refreshAccessToken(refreshToken: string) {
    try {
      console.log(refreshToken, 1);
      const result: AxiosResponse = await refreshInstance.get(
        `${this.auth}/new-access-token`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      return result.data;
    } catch (err) {
      const Error = err as ErrorType;
      console.log(err);
      if (Error.response?.status === HTTP_STATUS.BAD_REQUEST) {
        alert('유효하지 않은 요청입니다');
      } else if (Error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
        alert('유효하지 않은 토큰입니다');
      } else if (Error.response?.status === HTTP_STATUS.NOT_FOUND) {
        alert('토큰을 찾을 수 없습니다');
      }
    }
  },
};
