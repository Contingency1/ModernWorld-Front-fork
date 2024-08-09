function myLoader({ src, width, quality }) {
  return `https://wang0514.s3.ap-northeast-2.amazonaws.com/page/${src}?w=${width}&q=${quality || 75}`;
}
