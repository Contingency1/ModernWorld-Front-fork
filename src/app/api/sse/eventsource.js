'use client';

import { useEffect, useState } from 'react';

const EventSourceApi = () => {
  const eventSource = new EventSource(
    `${process.env.MODERN_WORLD_BASE_URL}/sse/32`,
  );

  eventSource.onmessage();
  return <div></div>;
};

export default EventSource;
