import * as S from '@/components/my-page/contents/mail-box/style';
import GiftTitle from './GiftTitle';
import ItemInfo from './ItemInfo';
import Pagination from '../../pagination/Pagination';
import ItemList from './ItemList';

export default function MailBoxBodyEle(props: any) {
  return (
    <>
      <S.MailBoxSection>
        <GiftTitle title={props.title} />
        <ItemInfo title={props.title} />
        <Pagination width="70%" />
        <ItemList title={props.title} />
      </S.MailBoxSection>
    </>
  );
}
