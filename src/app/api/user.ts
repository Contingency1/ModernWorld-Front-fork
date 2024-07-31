import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { promises } from 'dns';

const USER = {
  path: `/users`,

  /** 유저 정보 불러오기 API */
  async getUserInfo(userId: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/${userId}`);
    return result.data;
  },

  async sendLike(userId: number): Promise<any> {
    try {
      const result: AxiosResponse = await instance.post(
        `${USER.path}/${userId}/likes`,
      );
      return result;
    } catch (error: any) {
      return error.response.status;
    }
  },

  async unLike(userId: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(
      `${USER.path}/${userId}/likes`,
    );
    return result;
  },

  async createNickname(nickname: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${USER.path}/my/nickname`,
      {
        nickname: nickname,
      },
    );
    return result;
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
};

export default USER;
