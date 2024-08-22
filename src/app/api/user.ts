import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { ErrorType } from '@/types/error';
import { HTTP_STATUS } from '@/utils/httpStatusCode';

const USER = {
  path: `/users`,

  /** 유저 정보 불러오기 API */
  async getUserInfo(userNo: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/${userNo}`);
    return result.data;
  },
  /** 유저 검색하기 */
  async searchUser(nickname: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}`, {
      params: {
        page: 1,
        take: 1,
        nickname: nickname,
      },
    });
    return result.data;
  },

  async sendLike(userId: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.post(
        `${USER.path}/${userId}/likes`,
      );
      return result;
    } catch (err) {
      const Error = err as ErrorType;
      switch (Error.response?.status) {
        case HTTP_STATUS.BAD_REQUEST:
        case HTTP_STATUS.NOT_FOUND:
          alert('존재하지 않는 유저입니다');
          break;

        case HTTP_STATUS.FORBIDDEN:
          alert('본인에게는 좋아요할 수 없습니다');
          break;

        case HTTP_STATUS.CONFLICT:
          alert('이미 좋아요한 유저입니다');
          break;
      }
    }
  },

  async unLike(userId: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.delete(
        `${USER.path}/${userId}/likes`,
      );
      return result;
    } catch (err) {
      const Error = err as ErrorType;
      switch (Error.response?.status) {
        case HTTP_STATUS.BAD_REQUEST:
          alert('존재하지 않는 유저입니다');
          break;

        case HTTP_STATUS.NOT_FOUND:
          alert('본인에게는 좋아요를 할 수 없습니다');
          break;
      }
    }
  },

  async createNickname(nickname: string): Promise<any> {
    try {
      const result: AxiosResponse = await instance.post(
        `${USER.path}/my/nickname`,
        {
          nickname: nickname,
        },
      );
      return result;
    } catch (err) {
      const Error = err as ErrorType;
      switch (Error.response?.status) {
        case HTTP_STATUS.BAD_REQUEST:
          alert('조건에 따라 닉네임을 작성해주세요');
          break;
        case HTTP_STATUS.CONFLICT:
          alert('이미 존재하는 닉네임입니다');
          break;
      }
    }
  },

  async createCharacter(characterNo: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${USER.path}/my/characters`,
      {
        characterNo: characterNo,
      },
    );
    return result;
  },

  async editDescription(s: string): Promise<any> {
    if (!window.confirm('자기소개를 수정하시겠습니까?')) {
      return;
    }
    const result: AxiosResponse = await instance.put(
      `${USER.path}/my/description`,
      {
        description: s,
      },
    );
    return result;
  },

  async getAttendance(): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${USER.path}/my/attendance`,
    );
    return result.data;
  },

  async setAttendance(stickerNo: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.patch(
        `${USER.path}/my/attendance`,
        {
          stickerNo: stickerNo,
        },
      );
      alert('출석하였습니다.');
      return result.data;
    } catch (error) {
      console.error('출석을 실패했습니다.', error);
      alert('출석을 실패했습니다.');
      throw error;
    }
  },

  async profileUpdate(): Promise<any> {
    const result: AxiosResponse = await instance.patch(`/auth/updateProfile`);
    return result.data;
  },
};

export default USER;
