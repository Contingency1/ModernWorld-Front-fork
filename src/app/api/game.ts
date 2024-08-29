import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { getTime } from '@/utils/date';
import { ErrorType } from '@/types/error';
import { HTTP_STATUS } from '@/utils/httpStatusCode';

export const GAME = {
  users: 'users',
  RSP: 'rock-scissors-paper',
  async PostUsersHand(userHand: number) {
    try {
      const result: AxiosResponse = await instance.post(
        `/${this.users}/my/${this.RSP}`,
        {
          choice: userHand,
        },
      );
      return result.data;
    } catch (err) {
      const Error = err as ErrorType;
      if (Error.response?.status === HTTP_STATUS.BAD_REQUEST) {
        alert('유효하지 않은 요청입니다');
      } else if (Error.response?.status === HTTP_STATUS.FORBIDDEN) {
        alert('기회를 모두 소진하였습니다');
      }
    }
  },

  async GetUsersLecord(userNo: number, date?: string) {
    {
      const result: AxiosResponse = await instance.get(
        `${this.users}/${userNo}/${this.RSP}?date=${date}`,
      );
      return result.data;
    }
  },
};
