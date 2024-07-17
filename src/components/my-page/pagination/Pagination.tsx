'use client';

import * as S from '@/components/my-page/pagination/style';

export default function Pagination(props: any) {
  // const nextPage = () => {
  //   if (props.title === '보낸 선물') {
  //     setSendPage((prevPage) =>
  //       prevPage < senderPresents.length - 1 ? prevPage + 1 : prevPage,
  //     );
  //   } else {
  //     setReceivePage((prevPage) =>
  //       prevPage < receiverPresents.length - 1 ? prevPage + 1 : prevPage,
  //     );
  //   }
  // };

  // const previousPage = () => {
  //   if (props.title === '보낸 선물') {
  //     setSendPage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  //   } else {
  //     setReceivePage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  //   }
  // };

  return (
    <>
      <S.PageSection width={`${props.width}`}>
        <div onClick={'previousPage'}>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
            alt="<"
            width="30vw"
          />
        </div>
        {/* {props.title === '보낸 선물' ? sendPage + 1 : receivePage + 1} /{' '}
        {props.title === '보낸 선물' || props.title === '보낸 편지'
          ? '보낸갯수'
          : '받은갯수'} */}
        <div onClick={'nextPage'}>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
            alt=">"
            width="30vw"
          />
        </div>
      </S.PageSection>
    </>
  );
}
