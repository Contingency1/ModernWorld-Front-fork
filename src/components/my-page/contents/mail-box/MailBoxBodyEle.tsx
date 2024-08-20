import * as S from '@/components/my-page/contents/mail-box/style';
import Title from './Title';
import Pagination from '../../pagination/Pagination';
import ItemList from './ItemList';
import PresentInfo from './PresentInfo';
import PostInfo from './PostInfo';
import { useAtomValue } from 'jotai';
import { mailBoxSelectAtom } from '@/states/mailboxAtoms';
import { MailBoxBodyEleProps } from '@/types/mailBox';

export default function MailBoxBodyEle(props: MailBoxBodyEleProps) {
  const type = useAtomValue(mailBoxSelectAtom);

  return (
    <>
      <S.MailBoxSection>
        <Title title={props.title} />
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
