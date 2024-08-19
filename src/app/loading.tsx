'use client';

import { bouncy } from 'ldrs';

const loading = () => {
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
