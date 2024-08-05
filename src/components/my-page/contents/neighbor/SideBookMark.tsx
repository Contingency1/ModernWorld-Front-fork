import * as S from '@/components/my-page/contents/style';
import { pageViewTypeAtom } from '@/states/neighbor';
import { useAtom } from 'jotai';

export default function SideBookMark() {
  const [type, setType] = useAtom(pageViewTypeAtom);

  const typeClick = (num: number) => {
    if (num === 0) {
      setType('list');
    } else {
      setType('management');
    }
  };
  return (
    <S.BookMarkSide>
      <S.RMenuDiv
        color={type === 'list' ? '#3C3C3C' : '#9C9C9C'}
        onClick={() => typeClick(0)}>
        목록
      </S.RMenuDiv>
      <S.RMenuDiv
        color={type === 'management' ? '#3C3C3C' : '#9C9C9C'}
        onClick={() => typeClick(1)}>
        관리
      </S.RMenuDiv>
    </S.BookMarkSide>
  );
}
