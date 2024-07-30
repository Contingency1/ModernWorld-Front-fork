'use client';

import Notification from '@/components/notification/notification';
import { CreateEventSource } from '../api/sse/CreateEventSource';

export default function test() {
  return (
    <div>
      <Notification message={CreateEventSource()}></Notification>
    </div>
  );
}
