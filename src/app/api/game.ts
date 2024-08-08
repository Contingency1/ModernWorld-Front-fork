import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const GAME = {
  users: 'users',
  RSP: 'rock-scissors-paper',
  async PostUsersHand(userHand: number) {
    const result: AxiosResponse = await instance.post(
      `/${this.users}/my/${this.RSP}`,
      {
        choice: userHand,
      },
    );
    return result.data;
  },

  async GetUsersLecord(userNo: number) {
    const result: AxiosResponse = await instance.get(
      `${this.users}/${userNo}/${this.RSP}`,
    );
    return result.data;
  },
};
