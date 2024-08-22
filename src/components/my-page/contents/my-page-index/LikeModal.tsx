import { useAtom } from 'jotai';
import * as S from '../my-page-index-modal/style';
import { isLikeModalAtom } from '@/states/userAtoms';

export default function LikeModal() {
  const [isLikeModal, setIsLikeModal] = useAtom(isLikeModalAtom);
  return (
    <>
      <S.MenuModalBackground>
        <S.MenuModalBody width="30vw">
          <S.DisplayDiv $justifyContent="end">
            <S.Font
              $fontSize="1.5vw"
              color="#7F7F7F"
              $margin="0.8vw 1vw 0 0"
              cursor="pointer"
              onClick={() => setIsLikeModal(false)}>
              x
            </S.Font>
          </S.DisplayDiv>
          <S.DisplayDiv
            $justifyContent="center"
            $alignItems="center"
            $margin="0.8vw 0 1.5vw 0">
            <S.Font color="#454545" $fontSize="18px" $margin="0 3.2vw 0 0">
              받은 좋아요 (30)
            </S.Font>
            <S.Font color="#454545" $fontSize="18px">
              보낸 좋아요 (30)
            </S.Font>
          </S.DisplayDiv>
          <S.DisplayDiv
            $justifyContent="center"
            $alignItems="center"
            $flexDirection="column">
            <S.LikeListContainer>ddd</S.LikeListContainer>
            <S.LikeListContainer>dd</S.LikeListContainer>
          </S.DisplayDiv>
        </S.MenuModalBody>
      </S.MenuModalBackground>
    </>
  );
}
