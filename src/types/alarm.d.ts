export interface AlarmsData {
  no: number;
  userNo: number;
  title: string;
  content: string;
  status: boolean;
  createdAt: string;
}
export interface AlarmsMetaData {
  page: number;
  take: number;
  totalCount: number;
  totalPage: number;
}

export interface OneAlarmData {
  content: string;
  createdAt: string;
  no: number;
  status: boolean;
  title: string;
  userNo: number;
}
