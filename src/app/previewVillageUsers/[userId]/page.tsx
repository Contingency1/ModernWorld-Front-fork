'use client';

import PreviewVillageUsers from '@/components/village-page/preview/previewVillageUsers';
import '@/style/globals.css';
import { usePathname } from 'next/navigation';

export default function previewVillageUsersPage() {
  const pathName = usePathname().split('/')[2];

  return <PreviewVillageUsers userNo={pathName}></PreviewVillageUsers>;
}
