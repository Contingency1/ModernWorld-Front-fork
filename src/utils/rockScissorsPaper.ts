export const RockSicssorsPaperArray = ['Scissors', 'Rock', 'Paper'];
export const RockSicssorsPaperImgArray = [
  'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EA%B0%80%EC%9C%84.svg',
  'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B0%94%EC%9C%84.svg',
  'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B3%B4.svg',
];
export const ResultArray = ['Draw', 'Win', 'Lose'];
const today = new Date();
export const year = today.getFullYear(); //연
export const month = String(today.getMonth() + 1).padStart(2, '0'); //월
export const day = String(today.getDate()).padStart(2, '0'); //일
