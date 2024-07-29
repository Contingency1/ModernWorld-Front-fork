'use client';

import { useState, useEffect } from 'react';
import { NotificationDiv } from './style';

const Notification = ({ message }: any) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5초 후에 알림 숨김

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <NotificationDiv>{message}</NotificationDiv>;
};

export default Notification;
