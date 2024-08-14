import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const COMMENT = {
  path: 'comments',
  async getComments(userNo: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `/users/${userNo}/${this.path}`,
    );
    return result.data;
  },
};
