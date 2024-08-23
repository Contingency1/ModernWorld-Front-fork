import * as S from '@/components/village-page/preview/modal/styled';
import { useSetAtom } from 'jotai';
import { IsModalStateAtom } from '@/states/village';
import GetUsersNickname from './GetUsersNickname';

const GetHearLegendtModal = (props: { userNo: number }) => {
  const closeModal = useSetAtom(IsModalStateAtom);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.RootDiv onClick={() => closeModal(false)}>
      <S.ModalRootDiv onClick={handleModalClick}>
        <S.TitleDiv>좋아요</S.TitleDiv>
        <S.CloseButton onClick={() => closeModal(false)}>x</S.CloseButton>
        <S.LikeListRootDiv>
          <GetUsersNickname userNo={props.userNo}></GetUsersNickname>
        </S.LikeListRootDiv>
      </S.ModalRootDiv>
    </S.RootDiv>
  );
};

export default GetHearLegendtModal;
