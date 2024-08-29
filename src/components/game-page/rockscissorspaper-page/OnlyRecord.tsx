'use client';

import { useAtomValue } from 'jotai';
import RecordComponent from './RecordComponent';
import { OnlyRecordAtom } from '../../../states/gameAtom';

export const OnlyRecord = () => {
  const onlyRecord = useAtomValue(OnlyRecordAtom);
  return <>{onlyRecord ? <RecordComponent></RecordComponent> : null}</>;
};
