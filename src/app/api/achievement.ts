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

  async setAchievements(no: number): Promise<any> {
    if (!window.confirm('해당 업적을 활성화하시겠습니까?')) {
      return;
    }
    const result: AxiosResponse = await instance.patch(
      `/users/my/achievements/${no}`,
    );
    return result.data;
  },
};
