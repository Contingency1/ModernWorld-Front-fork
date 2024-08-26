'use client';

import { bouncy } from 'ldrs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Loading = () => {
  const route = useRouter();

  useEffect(() => {
    try {
      // bouncy.register();
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
      {/* <l-bouncy size="45" speed="1.75" color="black"></l-bouncy> */}
      로딩중...
    </main>
  );
};

export default Loading;
