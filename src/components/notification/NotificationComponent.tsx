'use client';

import { Suspense, useEffect, useState } from 'react';
import styles from './Notification.module.css';

const NotificationComponent = () => {
  const [eventContent, setEventContent] = useState({
    title: '',
    content: '',
  });
  const [modalTimeOut, setModalTimeOut] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL}/sse/39`,
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
    };

    eventSource.addEventListener('message', eventContentHandler);

    return () => {
      eventSource.removeEventListener('message', eventContentHandler);
      eventSource.close();
    };
  }, [eventContent]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      {modalTimeOut ? (
        <div className={styles.rootDiv}>
          <div className={styles.eventMessageDiv}>{eventContent.content}</div>
        </div>
      ) : null}
    </Suspense>
  );
};

export default NotificationComponent;
