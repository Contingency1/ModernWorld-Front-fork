import * as S from '@/components/my-page/contents/mail-box/style';
import ItemListEle from './ItemListEle';
import { senderPresentAtom, receiverPresentAtom } from '@/states/mailboxAtoms';
import { useAtomValue } from 'jotai';
export default function ItemList(props: { title: string }) {
  const senderPresent = useAtomValue(senderPresentAtom);
  const receiverPresent = useAtomValue(receiverPresentAtom);

  return (
    <>
      <S.ContentsView height="20vh">
        <S.ListScroll>
          {(props.title === '받은 선물' ? receiverPresent : senderPresent).map(
            (i: any) => (
              <ItemListEle key={i.no} title={props.title} data={i} />
            ),
          )}
        </S.ListScroll>
      </S.ContentsView>
    </>
  );
}
