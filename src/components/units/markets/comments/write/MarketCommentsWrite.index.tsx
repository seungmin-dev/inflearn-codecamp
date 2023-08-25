import * as S from "./MarketCommentsWrite.styles";

export const MarketCommentsWrite = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.WriteIcon />
        문의하기
      </S.Title>
      <S.Container>
        <S.TextArea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.TextArea>
        <S.Bottom>
          <S.Length>0 / 100</S.Length>
          <S.Button>문의하기</S.Button>
        </S.Bottom>
      </S.Container>
    </S.Wrapper>
  );
};
