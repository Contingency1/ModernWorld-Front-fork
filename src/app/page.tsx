import React from 'react';
import '../style/globals.css';
import LoginPage from '@/components/index-page/LoginPage';
import Notification from '@/components/notification/notification';
import { CreateEventSource } from './api/sse/CreateEventSource';

export default function test() {
  return (
    <React.Fragment>
      <LoginPage></LoginPage>
    </React.Fragment>
  );
}
