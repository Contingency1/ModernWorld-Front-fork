'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const Loading = () => {
  const route = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      route.replace('/not-found');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [route]);
  return (
    <Suspense fallback={<></>}>
      <main
        style={{
          width: '95vw',
          height: '95vh',
          display: 'grid',
          placeContent: 'center',
        }}>
        로딩중...
      </main>
    </Suspense>
  );
};

export default Loading;
