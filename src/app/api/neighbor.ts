import axios, { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { ErrorType } from '@/types/error';
import { HTTP_STATUS } from '@/utils/httpStatusCode';

const NEIGHBOR = {
  path: `/neighbors`,

  /** 친구 요청 보내기 API */
  async sendFriendRequest(userNo: number): Promise<any> {
    if (!window.confirm('친구 요청을 보내시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.post(
        `/users/${userNo}${NEIGHBOR.path}`,
      );
      alert('성공적으로 친구 요청을 보냈습니다');
      return result.data;
    } catch (err) {
      const Error = err as ErrorType;
      switch (Error.response?.status) {
        case HTTP_STATUS.BAD_REQUEST:
        case HTTP_STATUS.NOT_FOUND:
          alert('존재하지 않는 이웃입니다');
          break;

        case HTTP_STATUS.FORBIDDEN:
          alert('본인에게 이웃 신청할 수 없습니다');
          break;

        case HTTP_STATUS.CONFLICT:
          alert('이미 친구요청을 보냈거나 친구인 이웃입니다');
          break;
      }
    }
  },

  /** 이웃 목록 불러오기 API */
  async getNeighbors(
    page: number,
    take: number,
    status: boolean,
    type?: string,
    orderBy?: string,
  ): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `/users/my${NEIGHBOR.path}`,
      {
        params: {
          page: page,
          take: take,
          orderBy: orderBy,
          status: status,
          type: type,
        },
      },
    );
    return result.data;
  },

  /** 이웃 신청 승인 API */
  async acceptNeighborRequest(neighborNo: number): Promise<any> {
    if (!window.confirm('수락하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.patch(
        `/users/my${NEIGHBOR.path}/${neighborNo}`,
      );
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);
      alert('실패했습니다.');
      throw error;
    }
  },

  /** 이웃 신청 거절 API */
  async deleteNeighborRequest(neighborNo: number): Promise<any> {
    if (!window.confirm('거절하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.delete(
        `/users/my${NEIGHBOR.path}/${neighborNo}`,
      );
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);
      alert('실패했습니다.');
      throw error;
    }
  },
};

export default NEIGHBOR;
