import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const MAILBOX = {
  path: `/users/my`,

  /** 선물함 불러오기 API */
  async getPresentsList(type: string): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${MAILBOX.path}/presents`,
      {
        params: {
          type: type,
        },
      },
    );
    return result.data;
  },

  /** 편지함 불러오기 API */
  async getPostsList(type: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MAILBOX.path}/posts`, {
      params: {
        type: type,
      },
    });
    return result.data;
  },
};

export default MAILBOX;
