'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import { usePathname, useRouter } from 'next/navigation';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { Token } from '@/app/api/getToken';
import { IMAGE } from '@/utils/image';

const NotificationComponent = () => {
  const [eventContent, setEventContent] = useState({
    title: '',
    content: '',
  });
  const [modalTimeOut, setModalTimeOut] = useState(false);
  const [redirect, setRedirect] = useState('/');
  const [special, setSpecial] = useState(true);
  const route = useRouter();
  const pathName = usePathname();

  const isSpecialPage = () => {
    if (
      pathName ===
      ('/' ||
        '/loginPage' ||
        '/naver/auth/callback' ||
        '/newcharacter' ||
        '/kakao/auth/callback' ||
        'google/auth/callback')
    ) {
      setSpecial(false);
    } else {
      setSpecial(true);
    }
  };

  const firstGetRefresh = async () => {
    try {
      const response = await Token.refreshAccessToken(document.cookie);
      const setLocalStorageItem = (key: string, value: string) => {
        try {
          localStorage.setItem(key, value);
        } catch (err) {
          console.log(err);
        }
      };
      setLocalStorageItem('accessToken', response);
    } catch (err) {
      alert('토큰 재발급 실패');
    }
  };

  const startRefreshAccessToken = () => {
    setInterval(firstGetRefresh, 10000);
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

  useEffect(() => {
    // startRefreshAccessToken();
  }, []);

  return (
    <>
      {modalTimeOut && special ? (
        <S.RootDiv>
          <S.CrossImage
            src={IMAGE.cross}
            onClick={() => setModalTimeOut(false)}></S.CrossImage>
          <div
            onClick={() => {
              redirectPage(redirect);
              setModalTimeOut(false);
            }}>
            <S.ContentDiv>{eventContent.content}</S.ContentDiv>
          </div>
        </S.RootDiv>
      ) : null}
    </>
  );
};

export default NotificationComponent;
