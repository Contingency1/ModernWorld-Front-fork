import * as S from '@/components/my-page/contents/mail-box/style';
import ItemListEle from './ItemListEle';
import { useAtomValue } from 'jotai';
export default function ItemList(props: { title: string }) {
  return (
    <>
      <S.ContentsView height="20vh">
        <S.ListScroll>
          {
            /* {(props.title === '받은 선물' ? receiverPresent : senderPresent).map(
            (i: any) => (
              <ItemListEle key={i.no} title={props.title} data={i} />
            ),
          )} */ <ItemListEle title={props.title} />
          }
        </S.ListScroll>
      </S.ContentsView>
    </>
  );
}
