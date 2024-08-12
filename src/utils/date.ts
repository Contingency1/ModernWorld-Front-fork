const today = new Date();
export const year = today.getFullYear(); //연
export const month = String(today.getMonth() + 1).padStart(2, '0'); //월
export const day = String(today.getDate()).padStart(2, '0'); //일
