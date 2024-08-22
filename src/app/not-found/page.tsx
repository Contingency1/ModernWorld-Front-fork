// app/error.tsx

'use client'; // 클라이언트 측에서 렌더링을 활성화

import { Not_found } from '@/components/error-page/Not_found';
import React from 'react';
import '../../style/globals.css';

const not_found = () => {
  return <Not_found />;
};

export default not_found;
