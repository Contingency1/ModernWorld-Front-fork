'use client';

import { useEffect, useState } from 'react';

export const CreateEventSource = () => {
  const [getEvent, setGetEvent] = useState({ title: '', content: '' });
  useEffect(() => {
    const eventSource = new EventSource(`https://dev.modern-world.shop/sse/32`);

    eventSource.onmessage = (e) => {
      try {
        if (e.data !== 'Connected') {
          const event = JSON.parse(e.data);
          console.log(event);
          return setGetEvent(event);
        }
      } catch (err) {
        console.log(`에러발생띠 : ${err}`);
      }
    };

    return (eventSource.close = (e) => {
      if (e) {
        console.log('eventsource closed');
      }
    });
  }, []);

  return (
    <>
      {getEvent.title}
      {getEvent.content}
    </>
  );
};
