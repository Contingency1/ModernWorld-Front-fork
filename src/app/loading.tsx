'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Loading = () => {
  const route = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      route.replace('/not-found');
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
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
