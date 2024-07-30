import { CreateEventSource } from '@/app/api/sse/CreateEventSource';
import Notification from './notification';

export const Testfile = () => {
  return <Notification message={CreateEventSource}></Notification>;
};
