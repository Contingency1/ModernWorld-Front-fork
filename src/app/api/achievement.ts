import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

export const ACHIEVEMENTS = {
  async getAchievements(category?: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`/users/my/achievements`, {
      params: {
        category: category,
      },
    });
    return result.data;
  },

  async setAchievements(no: number, title: string): Promise<any> {
    if (!window.confirm(`당신의 업적을 ${title}(으)로 설정하시겠습니까?`)) {
      return;
    }
    const result: AxiosResponse = await instance.patch(
      `/users/my/achievements/${no}`,
      {
        status: true,
      },
    );
    return result.data;
  },
};
