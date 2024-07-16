import * as S from '@/components/my-page/contents/mail-box/style';
import GiftTitle from './GiftTitle';
import ItemInfo from './PresentInfo';
import Pagination from '../../pagination/Pagination';
import ItemList from './ItemList';
import PresentInfo from './PresentInfo';
import PostInfo from './PostInfo';
import { useAtomValue } from 'jotai';
import { mailBoxSelectAtom } from '@/states/mailboxAtoms';

export default function MailBoxBodyEle(props: any) {
  const type = useAtomValue(mailBoxSelectAtom);
  return (
    <>
      <S.MailBoxSection>
        <GiftTitle title={props.title} />
        {!type ? (
          <PostInfo title={props.title} />
        ) : (
          <PresentInfo title={props.title} />
        )}

        <Pagination width="70%" title={props.title} />
        <ItemList title={props.title} />
      </S.MailBoxSection>
    </>
  );
}
