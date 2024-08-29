import { add, format } from 'date-fns';

export const getTime = () => {
  const today = new Date();
  const year = today.getFullYear(); // 년
  const month = String(today.getMonth() + 1).padStart(2, '0'); //월
  const day = String(today.getDate()).padStart(2, '0'); //일
  const hours = String(today.getHours()).padStart(2, '0'); // 시
  const minutes = String(today.getMinutes()).padStart(2, '0'); // 분
  const seconds = String(today.getSeconds()).padStart(2, '0'); // 초
  const UTChours = String(today.getUTCHours()).padStart(2, '0'); // UTC시
  const UTCminutes = String(today.getUTCMinutes()).padStart(2, '0'); // UTC분
  const UTCseconds = String(today.getUTCSeconds()).padStart(2, '0'); // UTC초

  const current = format(today, 'yyyy-MM-dd');

  return {
    current,
    year,
    today,
    month,
    day,
    hours,
    minutes,
    seconds,
    UTChours,
    UTCminutes,
    UTCseconds,
  };
};

export function getFormattedDate(isoDateString: string) {
  const date = new Date(isoDateString);

  date.setUTCHours(date.getUTCHours() + 9);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
