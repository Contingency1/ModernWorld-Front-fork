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

  /** 원래는 특정 선물 읽기지만 읽음 표시를 위한 요청 API */
  async setPresentStatus(no: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${MAILBOX.path}/presents/${no}`,
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

  /** 원래는 특정 포스트 읽기지만 읽음 표시를 위한 요청 API */
  async setPostCheck(no: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${MAILBOX.path}/posts/${no}`,
    );
    return result.data;
  },
};

export default MAILBOX;
