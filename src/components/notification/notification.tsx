'use client';

import { useState, useEffect } from 'react';

const Notification = (message?: string) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5초 후에 알림 숨김

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div>{message}</div>;
};

export default Notification;
