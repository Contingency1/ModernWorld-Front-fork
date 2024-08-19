'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import { usePathname, useRouter } from 'next/navigation';
import { EventSourcePolyfill } from 'event-source-polyfill';

const NotificationComponent = () => {
  const [eventContent, setEventContent] = useState({
    title: '',
    content: '',
  });
  const [modalTimeOut, setModalTimeOut] = useState(false);
  const [redirect, setRedirect] = useState('/');
  const [special, setSpecial] = useState(false);
  const route = useRouter();
  const pathName = usePathname();

  const isSpecialPage = () => {
    if (pathName === '/') {
      setSpecial(true);
    }
  };

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(
      `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}sse`,
      {
        headers: { Authorization: `Bearer ${accessToken ? accessToken : ''}` },
      },
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

    isSpecialPage();

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
    <>
      {modalTimeOut ? (
        <S.RootDiv $display={special}>
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
    </>
  );
};

export default NotificationComponent;
