import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { getTime } from '@/utils/date';

export const GAME = {
  users: 'users',
  RSP: 'rock-scissors-paper',
  async PostUsersHand(userHand: number) {
    console.log(userHand, 'axios');
    const result: AxiosResponse = await instance.post(
      `/${this.users}/my/${this.RSP}`,
      {
        choice: userHand,
      },
    );
    return result.data;
  },

  async GetUsersLecord(userNo: number, date?: string) {
    if (Number(getTime().UTChours) > 15) {
      const result: AxiosResponse = await instance.get(
        `${this.users}/${userNo}/${this.RSP}?date=${!date ? `${getTime().year}-${getTime().month}-${Number(getTime().day) - 1}` : date}`,
      );
      return result.data;
    } else {
      const result: AxiosResponse = await instance.get(
        `${this.users}/${userNo}/${this.RSP}?date=${!date ? `${getTime().year}-${getTime().month}-${getTime().day}` : date}`,
      );
      return result.data;
    }
  },
};
