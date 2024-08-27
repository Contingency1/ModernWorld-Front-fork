import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const LOGOUT = {
  path: `/auth/logout`,

  /** 로그아웃 API */
  async getLogout(): Promise<any> {
    if (!window.confirm('로그아웃 하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }

    try {
      const result: AxiosResponse = await instance.delete(`${LOGOUT.path}`);
      alert('로그아웃 되었습니다.');
      return result.data;
    } catch (error) {
      console.error('로그아웃 실패하였습니다.', error);
      alert('로그아웃 실패하였습니다.');
      throw error;
    }
  },
};

export default LOGOUT;
