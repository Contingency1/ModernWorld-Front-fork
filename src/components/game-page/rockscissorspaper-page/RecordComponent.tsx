import * as S from '../styled';

const RecordComponent = () => {
  const records = '승 승 승 승 승 승 승 승 승 패';
  const points = '+1000 +1000 +1000 +1000 +1000 +1000 +1000 +1000 +1000 0';
  const recordArray = records.split(' ');
  const pointArray = points.split(' ');

  return (
    <S.RecordRootDiv>
      <S.RecordHeader>
        <S.TodayMatch>오늘의 대전</S.TodayMatch>
        <S.RetryText>다시하기</S.RetryText>
      </S.RecordHeader>
      <S.RecordBody>
        <S.BotAndUserRecordDiv>
          <S.ArrowImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png'
            }></S.ArrowImg>
          <S.UserAndBotText>봇</S.UserAndBotText>
          <S.Line></S.Line>
          <S.RecordLegendDiv>
            바위 바위 바위 바위 바위 바위 바위 바위 바위 바위
          </S.RecordLegendDiv>
        </S.BotAndUserRecordDiv>
        <S.ScoreDiv>
          <S.RecordLegendDiv>
            {recordArray.map((record, index) => (
              <S.RecordText
                key={index}
                color={record === '승' ? 'blue' : 'red'}>
                {record}
              </S.RecordText>
            ))}
          </S.RecordLegendDiv>
          <S.RecordLegendDiv>
            {pointArray.map((record, index) => (
              <S.RecordText
                style={{ marginLeft: '1vw' }}
                key={index}
                color={record === 'white' ? 'white' : 'white'}>
                {record}
              </S.RecordText>
            ))}
          </S.RecordLegendDiv>
        </S.ScoreDiv>
        <S.BotAndUserRecordDiv>
          <S.RecordLegendDiv>
            가위 <br />보 <br />보 <br />보 <br />보 <br />보 <br />보 <br />보{' '}
            <br />보<br />보
          </S.RecordLegendDiv>
          <S.Line></S.Line>
          <S.UserAndBotText>나</S.UserAndBotText>
          <S.ArrowImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png'
            }></S.ArrowImg>
        </S.BotAndUserRecordDiv>
      </S.RecordBody>
    </S.RecordRootDiv>
  );
};

export default RecordComponent;
