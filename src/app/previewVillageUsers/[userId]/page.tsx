import GetHearLegendtModal from '@/components/village-page/preview/modal/GetHeartLegendModal';
import PreviewVillageUsers from '@/components/village-page/preview/previewVillageUsers';
import '@/style/globals.css';

export default function PreviewVillageUsersPage({
  params,
}: {
  params: { userId: number };
}) {
  return (
    <>
      <PreviewVillageUsers userNo={params.userId}></PreviewVillageUsers>
    </>
  );
}
