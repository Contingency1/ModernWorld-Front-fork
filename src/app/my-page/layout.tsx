import "../../style/globals.css";
import MyPage from "@/components/my-page/MyPage";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MyPage />
    </>
  );
}
