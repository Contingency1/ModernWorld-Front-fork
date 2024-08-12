const today = new Date();
// 대한민국 기준

export const year = today.getFullYear(); //년
export const month = String(today.getMonth() + 1).padStart(2, '0'); //월
export const day = String(today.getDate()).padStart(2, '0'); //일
export const hours = String(today.getHours()).padStart(2, '0'); // 시
export const minutes = String(today.getMinutes()).padStart(2, '0'); // 분
export const seconds = String(today.getSeconds()).padStart(2, '0'); // 초

// UTC 기준
export const UTChours = String(today.getUTCHours()).padStart(2, '0'); // UTC시
export const UTCminutes = String(today.getUTCMinutes()).padStart(2, '0'); // UTC분
export const UTCseconds = String(today.getUTCSeconds()).padStart(2, '0'); // UTC초
