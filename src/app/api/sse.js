'use client';

import * as S from '@/components/village-page/style';
import { useEffect, useState } from 'react';
import instance from './axiosInstance';
import { NotificationDiv } from '@/components/notification/style';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('https://dev.modern-world.shop/sse/32');

    eventSource.onmessage = function (event) {
      setEvents((prevEvents) => {
        console.log(events);
        if (event.data !== 'Connected') {
          return [...prevEvents, JSON.parse(event.data)];
        } else {
          return [...prevEvents, event.data];
        }
      });
    };

    eventSource.onerror = function (err) {
      console.error('EventSource failed:', err);
    };
  }, []);
  const SSE = {
    async postEvent() {
      try {
        await instance.post('sse/32', {
          content: 'dms',
        });
      } catch (error) {
        return error;
      }
    },
  };
  return (
    <>
      <h1>SSE</h1>
      <div>
        <button onClick={() => SSE.postEvent()}></button>
        {events.map((event, index) => (
          <NotificationDiv key={index}>
            {console.log(event)}
            {event.title}
            {event.content}
          </NotificationDiv>
        ))}
      </div>
    </>
  );
};

export default Home;
