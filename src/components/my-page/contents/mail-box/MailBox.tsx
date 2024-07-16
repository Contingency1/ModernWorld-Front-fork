import * as S from '@/components/my-page/contents/style';
import MailBoxBody from './MailBoxBody';
import SideBookMark from './SideBookMark';
export default function MailBox() {
  return (
    <>
      <S.ContentSection>
        <S.BookMarkBody>
          <MailBoxBody />
          <SideBookMark />
        </S.BookMarkBody>
      </S.ContentSection>
    </>
  );
}
