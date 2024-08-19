'use client';

import { bouncy } from 'ldrs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const loading = () => {
  const route = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      route.replace('/not-found');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [route]);

  bouncy.register();
  return (
    <div
      style={{
        width: '95vw',
        height: '95vh',
        display: 'grid',
        placeContent: 'center',
      }}>
      <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
    </div>
  );
};

export default loading;
