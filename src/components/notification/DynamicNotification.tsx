'use client';

import dynamic from 'next/dynamic';

// 클라이언트 사이드에서만 NotificationComponent를 로드합니다.
const DynamicNotification = dynamic(
  () => import('./NotificationComponent').then((mod) => mod.default),
  {
    ssr: true,
  },
);

export const Notification = () => {
  return <DynamicNotification />;
};
