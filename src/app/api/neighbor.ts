import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const NEIGHBOR = {
  path: `/neighbors`,

  /** 친구 요청 보내기 API */
  async sendFriendRequest(userNo: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `/users/${userNo}${NEIGHBOR.path}`,
    );
    return result.data;
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
