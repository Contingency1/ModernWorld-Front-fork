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
};

export default MAILBOX;
