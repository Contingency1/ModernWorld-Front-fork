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
  return {
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
