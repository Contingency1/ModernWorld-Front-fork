import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const COMMENT = {
  path: 'comments',
  async getComments(
    userNo: number,
    page?: number,
    take?: number,
    orderBy?: string,
    type?: string,
  ): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `/users/${userNo}/${this.path}?page=${page}&take=${take}&orderBy=${orderBy}&type=${type}`,
    );
    return result.data;
  },
  async postComments(userNo: number, content: string) {
    const result: AxiosResponse = await instance.post(
      `/users/${userNo}/${this.path}`,
      {
        content: content,
      },
    );
    return result.data;
  },
};
