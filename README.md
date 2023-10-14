# 🛒 Second hand market

<div style="width: 100%; height: 500px; display: flex; justify-content: space-between;">
  <p align="center">
    <img width="500" src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/068129d8-bef6-4251-b55e-5629a42e11d1" />
    <img width="200" src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/1f0fa5d0-fa65-426c-8b97-745a19700e00" />
  </p>
</div>
<br />
중고마켓을 판매할 수 있는 사이트입니다.
<br />
<br />
💻 배포 주소 : <a href="https://ssummer.store/">https://ssummer.store/</a>
<br />
<br />
🚨 AWS에서 S3와 EC2로 정적 페이지와 동적 페이지를 분리해 배포하였으나 백엔드 서버의 보안정책으로 인해 동적 페이지는 작동이 되지 않습니다.
<br />
<hr />
<br />

## 🛠️ Techstack

- NextJS
- Typescript
- Emotion
- ApolloClient
- Recoil
<br />
<hr />
<br />

## 🛍️ Features

### 자유게시판
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/a04d3042-5f1d-45a6-abc7-a341f4ed7bc8" />
</p>
비회원도 이용할 수 있는 게시판입니다. 페이지네이션이 적용되어있습니다.
<br />
<br />
<br />

- 자유게시판 글 조회
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/a28ba1ca-3868-4bc4-8db9-ad5ce069eae6" />
</p>
글 목록에서 게시글에 마우스 오버 시 해당 게시글을 프리페치해옵니다(중고마켓에도 적용되어있습니다).<br />
Lodash 라이브러리의 debounce 기능을 적용해 0.5초 머문 게시글에만 적용시켰습니다.
<br />
<br />
<br />

- 자유게시판 글 작성
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/6356140e-e1a2-4571-b662-d9d9f084ccb8" />
</p>
비회원도 글 등록이 가능합니다. 에디터를 사용해 텍스트를 꾸밀 수 있고, 주소 검색 기능과 사진 등록 기능을 제공합니다.<br />
에디터에 입력된 텍스트는 화면에 렌더링되기 전에 dompurify를 사용해 XSS 공격을 방지하는 과정을 거칩니다.
<br />
<br />
<br />


- 자유게시판 댓글(비회원)
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/18069811-1276-4c85-9923-0d1146c8b197" />
</p>
비회원도 댓글 작성이 가능합니다. ApolloClient의 refetchQueries 기능을 사용해 추가 리페치 없이 화면에 빠르게 결과를 보여줍니다.<br />
수정, 삭제 시에는 작성자가 등록한 비밀번호를 입력해야 합니다.
<br />
<br />
<br />


- 검색기능
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/b1914190-d97f-4603-b6d1-9064bf1a00ff" />
</p>
검색기능을 지원합니다.(중고마켓에도 적용되어있습니다.) Lodash 라이브러리의 debounce 기능을 적용해 체인지 이벤트가 일어나고 0.5초 후의 입력값으로 조회합니다.
검색어가 포함된 글 목록을 보여주고 해당 검색어는 노란색으로 표시됩니다.
<br />
<br />
<br />

<hr />

### 중고마켓
- 중고마켓 CRUD
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/5e7aac03-23eb-44da-99b3-040134e2d56e" />
</p>
회원만 상품 등록이 가능합니다. 지도에서 직거래 장소를 선택해 보여줄 수 있습니다.<br />
지도 API는 카카오 지도 API를 사용했습니다.
<br />
<br />
<br />

- 답댓글
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/dc49c19e-a6d7-4fc1-9da1-11608a98d6cb" />
</p>
중고마켓 댓글은 회원들만 작성 가능합니다. 
구매를 원하는 회원이 댓글을 달면 그 댓글에 답댓글은 원 댓글 작성자와 판매자만 등록할 수 있습니다.
<br />
<br />
<br />

- 무한스크롤
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/a04c7061-9249-4f43-aa84-c70b8d2b71d7" />
</p>
중고마켓 목록에는 무한스크롤이 적용되어있습니다.
<br />
<br />
<br />

- 최근 본 상품 저장
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/42bdd90e-729d-4260-8565-f0daf112b208" />
</p>
PC모드에서 최근 본 상품은 중고마켓 화면의 오른쪽 박스에 저장됩니다. 최근 상품 3개까지 저장되고 해당 박스는 스크롤을 내리면 따라옵니다(스티키 박스).
<br />
<br />
<br />

- 찜기능
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/8db0955c-e9ec-4527-9e0b-ec33332e69c3" />
</p>
찜하고 싶은 상품에 찜을 할 수 있습니다. 찜한 상품은 마이페이지-찜 목록에서 확인할 수 있습니다.
<br />
<br />
<br />

<hr />

### 로그인, 회원가입
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/4773fb01-dacf-4961-9337-535cc1d2bff3" />
</p>
중고마켓 상품등록, 댓글등록, 포인트 충전, 마이페이지 메뉴는 회원 전용 메뉴입니다. 
비로그인 상태에서 해당 기능을 클릭하거나 화면에 진입 시 알림창을 띄우고 로그인 화면으로 이동됩니다.
<br />
로그인 성공 시 accessToken은 전역변수 관리툴 recoil에 저장에 저장되어 관리됩니다.
<br />
<br />
<br />

<hr />

  
### 포인트 충전
<p align="center">
  <img width="800" src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/99c9bbe6-0086-45ba-9665-ac9654d5b0ea" />
</p>
포트원 API를 이용해 카카오페이로 포인트를 충전할 수 있습니다.
<br />
<br />
<br />

<hr />

### 마이페이지
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/6e216739-3306-4f40-88d9-c57fd0863b97" />
</p>
중고마켓에 등록한 상품목록, 찜목록, 포인트 충전 내역을 확인할 수 있습니다.
<br />
<br />
<br />

- 회원정보 수정
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/c10f349f-d8a1-475b-b290-a6ba69bb5ec7" />
</p>
프로필 사진과 닉네임을 수정할 수 있습니다.
<br />
<br />
<br />

- 비밀번호 변경
<p align="center">
  <img src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/ad197d6e-27ec-41a7-8eef-d7981eed47ce" />
</p>
비밀번호를 변경할 수 있습니다. 벨리데이션에 미달되는 사항을 인풋 하단에 표시하고 벨리데이션을 통과하면 변경버튼이 활성화됩니다.
<br />
<br />
<br />


## 📱 Responsive design
<p align="center">
  <img width="350" src="https://github.com/seungmin-dev/second-hand-market/assets/67530394/83971b2d-950c-4789-a4b7-2292e5586dd3" />
</p>
모바일 반응형 화면을 지원합니다.
<br />
<br />
<br />

