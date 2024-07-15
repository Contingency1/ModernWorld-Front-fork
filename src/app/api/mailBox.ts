import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const MAILBOX = {
  path: `/presents`,

  /** 선물함 불러오기 API */
  async getPresentsList(type: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MAILBOX.path}`, {
      params: {
        type: type,
      },
    });
    return result.data;
  },

  /** 특정 선물 정보 불러오기 API */
  async getPresent(presentNo: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${MAILBOX.path}/${presentNo}`,
    );
    return result.data;
  },

  /** 편지함 불러오기 API */
  async getPostsList(type: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`/post`, {
      params: {
        type: type,
      },
    });
    return result.data;
  },

  /** 특정 편지함 불러오기 API */
  async getPost(no: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`/post/${no}`);
    return result.data;
  },
};

export default MAILBOX;
