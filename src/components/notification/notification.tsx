'use client';

import { Suspense, useEffect, useState } from 'react';
import * as S from './styled';

export const Notification = () => {
  const [eventContent, setEventContent] = useState({ title: '', content: '' });
  const [modalTimeOut, setModalTimeOut] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource(`https://dev.modern-world.shop/sse/32`);

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
    };

    eventSource.addEventListener('message', eventContentHandler);

    return () => {
      eventSource.removeEventListener('message', eventContentHandler);
      eventSource.close();
    };
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      {modalTimeOut ? (
        <S.RootDiv>
          <S.EventMessageDiv>{eventContent.content}</S.EventMessageDiv>
        </S.RootDiv>
      ) : (
        <></>
      )}
    </Suspense>
  );
};
