'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Loading = () => {
  const route = useRouter();

  useEffect(() => {
    try {
    } catch (error) {
      console.error('Error registering bouncy:', error);
    }
    const timeout = setTimeout(() => {
      route.replace('/not-found');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [route]);

  return (
    <main
      style={{
        width: '95vw',
        height: '95vh',
        display: 'grid',
        placeContent: 'center',
      }}>
      로딩중...
    </main>
  );
};

export default Loading;
