import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.Container>
      <S.Title>게시물 등록</S.Title>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <S.BoxWrapper style={{ width: "49%" }}>
          <S.SmallTitle>작성자</S.SmallTitle>
          <S.Input
            type="text"
            onChange={props.onChangeWriter}
            placeholder="이름을 적어주세요."
          ></S.Input>
          <S.Error>{props.writeError}</S.Error>
        </S.BoxWrapper>
        <S.BoxWrapper style={{ width: "49%" }}>
          <S.SmallTitle>비밀번호</S.SmallTitle>
          <S.Input
            type="password"
            onChange={props.onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          ></S.Input>
          <S.Error>{props.passwordError}</S.Error>
        </S.BoxWrapper>
      </div>
      <S.BoxWrapper>
        <S.SmallTitle>제목</S.SmallTitle>
        <S.Input
          type="text"
          onChange={props.onChangeTitle}
          placeholder="제목을 작성해주세요."
        ></S.Input>
        <S.Error>{props.titleError}</S.Error>
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.SmallTitle>내용</S.SmallTitle>
        <textarea
          style={{
            border: "1px solid #dadada",
            padding: "8px",
            display: "block",
            width: "100%",
            height: "200px",
          }}
          type="text"
          onChange={props.onChangeContents}
          placeholder="내용을 작성해주세요."
        ></textarea>
        <S.Error>{props.contentsError}</S.Error>
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.SmallTitle>주소</S.SmallTitle>
        <S.Input
          type="text"
          placeholder="07250"
          style={{ width: "60px", marginRight: "10px" }}
        />
        <S.ZipCodeButton>우편번호 검색</S.ZipCodeButton>
        <br />
        <S.Input type="text" />
        <br />
        <S.Input type="text" />
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.SmallTitle>유튜브</S.SmallTitle>
        <S.Input type="text" placeholder="링크를 복사해주세요." />
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.SmallTitle>사진 첨부</S.SmallTitle>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                width: "45px",
                height: "45px",
                padding: "5px",
                backgroundColor: "#BDBDBD",
                textAlign: "center",
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#4F4F4F",
                  padding: 0,
                  margin: 0,
                }}
              >
                +
              </span>
              <span style={{ color: "#4F4F4F", fontSize: "0.5rem" }}>
                Upload
              </span>
            </div>
          ))}
        </div>
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.SmallTitle>메인 설정</S.SmallTitle>
        <div style={{ marginBottom: "30px" }}>
          <label style={{ fontSize: "0.9rem", marginRight: "10px" }}>
            <S.RadioInput type="radio" name="mainSetting" value="youtube" />
            유튜브
          </label>
          <label style={{ fontSize: "0.9rem", marginRight: "10px" }}>
            <S.RadioInput type="radio" name="mainSetting" value="photo" />
            사진
          </label>
        </div>
      </S.BoxWrapper>
      <S.SubmitButton onClick={props.onClickSubmit} isActive={props.isActive}>
        등록하기
      </S.SubmitButton>
    </S.Container>
  );
}
