'use client';

import GetHearLegendtModal from '@/components/village-page/preview/modal/GetHeartLegendModal';
import PreviewVillageUsers from '@/components/village-page/preview/previewVillageUsers';
import { IsModalStateAtom, UserSelectedAtom } from '@/states/village';
import '@/style/globals.css';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

export default function PreviewVillageUsersPage() {
  const pathName = usePathname().split('/')[2];
  const [_, setUserSelectedAtom] = useAtom(UserSelectedAtom);
  setUserSelectedAtom(pathName);
  const [isModal, setIsModal] = useAtom(IsModalStateAtom);

  return (
    <>
      <PreviewVillageUsers userNo={Number(pathName)}></PreviewVillageUsers>
      {isModal ? <GetHearLegendtModal userNo={Number(pathName)} /> : null}
    </>
  );
}
