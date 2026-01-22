import axios, { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { ErrorType } from '@/types/error';
import { HTTP_STATUS } from '@/utils/httpStatusCode';

export const Token = {
  auth: 'auth',

  async getToken(social: string, code: string, state: string) {
    try {
      const result: AxiosResponse = await instance.post(
        `${Token.auth}/login/${social}?code=${code}&state=${state}`,
      );
      return result.data;
    } catch (err) {
      alert('로그인 실패 다시 시도해주세요');
    }
  },

  async refreshAccessToken() {
    try {
      const result: AxiosResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}${this.auth}/new-access-token`,
        {
          withCredentials: true, // 쿠키 전송 필수
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return result.data;
    } catch (err) {
      const Error = err as ErrorType;
      if (Error.response?.status === HTTP_STATUS.BAD_REQUEST) {
        alert('유효하지 않은 요청입니다');
      } else if (Error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
        alert('유효하지 않은 토큰입니다');
      } else if (Error.response?.status === HTTP_STATUS.NOT_FOUND) {
        alert('토큰을 찾을 수 없습니다');
      }
      throw err;
    }
  },
};
