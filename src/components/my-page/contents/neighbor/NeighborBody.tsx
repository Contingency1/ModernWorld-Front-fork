import { useAtomValue } from 'jotai';
import * as S from './style';
import { pageViewTypeAtom } from '@/states/neighbor';
import Management from './Management';
import List from './List';
export default function NeighborBody() {
  const type = useAtomValue(pageViewTypeAtom);
  return (
    <S.DefaultDiv>{type === 'list' ? <List /> : <Management />}</S.DefaultDiv>
  );
}
