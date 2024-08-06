'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NotificationComponent = () => {
  const [eventContent, setEventContent] = useState({
    title: '',
    content: '',
  });
  const [modalTimeOut, setModalTimeOut] = useState(false);
  const [redirect, setRedirect] = useState('/');
  const route = useRouter();

  useEffect(() => {
    const userNo = localStorage.getItem('userNo');
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/sse/${userNo}`,
    );

    const eventContentHandler = (e: {
      data: { title: string; content: string } | 'Connected';
    }) => {
      try {
        const eventData = JSON.parse(
          e.data as '{ title: string; content: string }' | 'Connected',
        );
        if (e.data !== 'Connected') {
          setModalTimeOut(true);
          setEventContent(eventData);
          setTimeout(() => setModalTimeOut(false), 10000);
        }
      } catch (err) {
        console.log(err);
      }

      switch (eventContent.title) {
        case '쪽지':
          setRedirect('/my-page/mailbox');
          break;
        case '방명록':
          setRedirect('/');
          break;
        case '이웃':
          setRedirect('/my-page');
          break;
        case '업적':
          setRedirect('/my-page');
          break;
        case '좋아요':
          setRedirect('/my-page');
          break;
        case '선물':
          setRedirect('/my-page/mailbox');
          break;
        case '게임':
          setRedirect('/my-page');
          break;
        default:
          setRedirect('/my-page');
          break;
      }
    };

    eventSource.addEventListener('message', eventContentHandler);

    return () => {
      eventSource.removeEventListener('message', eventContentHandler);
      eventSource.close();
    };
  }, [eventContent]);

  const redirectPage = (redirect: string) => {
    route.push(redirect);
  };

  return (
    <S.OnclickDiv>
      {modalTimeOut ? (
        <S.RootDiv>
          <S.CrossImage
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/cross-small_4338828.svg'
            }
            onClick={() => setModalTimeOut(false)}></S.CrossImage>
          <div
            onClick={() => {
              redirectPage(redirect);
              setModalTimeOut(false);
            }}>
            <S.TitleDiv>{eventContent.title}</S.TitleDiv>
            <S.ContentDiv>{eventContent.content}</S.ContentDiv>
          </div>
        </S.RootDiv>
      ) : null}
    </S.OnclickDiv>
  );
};

export default NotificationComponent;
