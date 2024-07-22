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

  /** 선물 삭제 API */
  async delPresent(no: number): Promise<any> {
    if (!window.confirm('선물을 삭제하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }

    try {
      const result: AxiosResponse = await instance.delete(
        `${MAILBOX.path}/presents/${no}`,
      );
      alert('선물 삭제를 성공하였습니다.');
      return result.data;
    } catch (error) {
      console.error('선물 삭제를 실패하였습니다.', error);
      alert('선물 삭제를 실패하였습니다.');
      throw error;
    }
  },

  /** 선물 수락/거절 API */
  async updatePresentStatus(no: number, status: string): Promise<any> {
    if (status === 'accept') {
      if (!window.confirm('선물을 수락하시겠습니까?')) {
        return; // 확인을 받지 못하면 함수 종료
      }
    } else {
      if (!window.confirm('선물을 거절하시겠습니까?')) {
        return; // 확인을 받지 못하면 함수 종료
      }
    }
    try {
      const result: AxiosResponse = await instance.patch(
        `${MAILBOX.path}/presents/${no}`,
        {
          status: status,
        },
      );
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);
      if (error.response.status === 403) {
        alert(`이미 ${status} 된 선물입니다`);
      } else {
        alert('실패했습니다.');
      }

      throw error;
    }
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

  /** 편지 삭제 API */
  async delPost(no: number): Promise<any> {
    if (!window.confirm('편지를 삭제하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }

    try {
      const result: AxiosResponse = await instance.delete(
        `${MAILBOX.path}/posts/${no}`,
      );
      alert('삭제 되었습니다.');
      return result.data;
    } catch (error) {
      console.error('편지 삭제를 실패하였습니다.', error);
      alert('편지 삭제를 실패하였습니다.');
      throw error;
    }
  },

  /** 편지 생성 API */
  async createPost(no: number, content: string): Promise<any> {
    if (!window.confirm('편지를 보내시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.post(`/users/${no}/posts`, {
        content: content,
      });
      alert('편지를 보냈습니다.');
      return result.data;
    } catch (error) {
      console.error('편지 생성을 실패하였습니다.', error);
      alert('편지 보내기를 실패했습니다.');
      throw error;
    }
  },
};
export default MAILBOX;
