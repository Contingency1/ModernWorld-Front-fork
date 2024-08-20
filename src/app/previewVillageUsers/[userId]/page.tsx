'use client';

import PreviewVillageUsers from '@/components/village-page/preview/previewVillageUsers';
import { UserSelectedAtom } from '@/states/village';
import '@/style/globals.css';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

export default function previewVillageUsersPage() {
  const pathName = usePathname().split('/')[2];
  const [_, setUserSelectedAtom] = useAtom(UserSelectedAtom);
  setUserSelectedAtom(pathName);

  return <PreviewVillageUsers userNo={Number(pathName)}></PreviewVillageUsers>;
}
