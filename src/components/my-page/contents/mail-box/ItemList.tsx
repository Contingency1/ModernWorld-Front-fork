import * as S from '@/components/my-page/contents/mail-box/style';
import ItemListEle from './ItemListEle';
import { useAtomValue } from 'jotai';
import { receiverDataAtom, senderDataAtom } from '@/states/mailboxAtoms';
export default function ItemList(props: { title: string }) {
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  return (
    <>
      <S.ContentsView height="20vh">
        <S.ListScroll>
          {(props.title.includes('받은') ? receiverData : senderData).map(
            (i: any) => (
              <ItemListEle key={i.no} title={props.title} data={i} />
            ),
          )}
        </S.ListScroll>
      </S.ContentsView>
    </>
  );
}
