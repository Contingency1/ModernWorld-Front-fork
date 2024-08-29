import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const AUTH = {
  path: `/auth`,

  /** 로그아웃 API */
  async getLogout(): Promise<any> {
    if (!window.confirm('로그아웃 하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }

    try {
      const result: AxiosResponse = await instance.delete(
        `${AUTH.path}/logout`,
      );
      alert('로그아웃 되었습니다.');
      return result.data;
    } catch (error) {
      console.error('로그아웃 실패하였습니다.', error);
      alert('로그아웃 실패하였습니다.');
      throw error;
    }
  },

  /** 회원 탈퇴 API */
  async userWithdrawal(): Promise<any> {
    if (!window.confirm('정말로 회원 탈퇴 하시겠습니까?')) {
      return; // 첫 번째 확인에서 '취소'를 누르면 함수 종료
    }

    if (
      !window.confirm(
        '30일 이전에 재가입시 기존 정보를 유지합니다. 동의하십니까?',
      )
    ) {
      return; // 두 번째 확인에서 '취소'를 누르면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.delete(
        `${AUTH.path}/unlink`,
      );
      alert('성공적으로 탈퇴하였습니다.');
      return result.data;
    } catch (error) {
      console.error('실패하였습니다.', error);
      alert('실패하였습니다.');
      throw error;
    }
  },
};

export default AUTH;
