import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const ALARM = {
  path: `/users/my/alarms`,

  /** 알람 목록 불러오기 API */
  async getAlarm(page: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${ALARM.path}`, {
      params: {
        page: page,
        take: 6,
      },
    });
    return result.data;
  },

  /** 알람 삭제하기 */
  async delAlarm(alarmNo: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(
      `${ALARM.path}/${alarmNo}`,
    );
    return result.data;
  },
};

export default ALARM;
