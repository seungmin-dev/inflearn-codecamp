import Link from "next/link";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { replaceNumberComma } from "../../../commons/libraries/utils";
import * as S from "./MySideBar.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRef, useState } from "react";
import { useMutationUpdateUser } from "../../../commons/hooks/mutations/useMutationUpdateUser";
import { useMuatationUploadFile } from "../../../commons/hooks/mutations/useMutationUploadFile";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/stores";

export const MySideBar = (): JSX.Element => {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQueryFetchUserLoggedIn();
  const [updateUser] = useMutationUpdateUser();
  const [uploadFile] = useMuatationUploadFile();

  const MY_PAGE_MANU = [
    { page: "/mypage", name: "내 장터" },
    { page: "/mypage/point", name: "내 포인트" },
    { page: "/mypage/profile", name: "내 프로필" },
  ];
  const onClickUpdateUser = (boolean: boolean) => (): void => {
    if (router.pathname === "/mypage/profile") setIsOpen(boolean);
  };
  const onClickOk = async (): Promise<void> => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: nameRef.current.value,
            picture: pictureUrl,
          },
        },
      });
      setUserInfo({
        id: userInfo.id,
        name: nameRef.current.value,
        email: userInfo.email,
        picture: pictureUrl,
        amount: userInfo.amount,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }

    setIsOpen(false);
  };
  const onClickFile = (): void => {
    fileRef.current.click();
  };
  const onChangeFile = async (): Promise<void> => {
    const file = fileRef.current.files[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setPictureUrl(result?.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.Wrapper>
      <Modal open={isOpen} onOk={onClickOk} onCancel={onClickUpdateUser(false)}>
        <S.Modal>
          <S.ModalTitle>유저 정보 수정</S.ModalTitle>
          <S.ModalImg
            ref={pictureRef}
            src={`https://storage.googleapis.com/${
              pictureUrl === "" ? userInfo.picture : pictureUrl
            }`}
            onError={(event) =>
              (event.currentTarget.src = "/images/icons/profile.png")
            }
          />
          <S.ModalButton onClick={onClickFile}>변경하기</S.ModalButton>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={onChangeFile}
          />
          <S.ModalInput
            type="text"
            defaultValue={userInfo.name}
            ref={nameRef}
          />
        </S.Modal>
      </Modal>
      <S.InfoWrapper>
        <S.InfoTitle>MYPAGE</S.InfoTitle>
        <S.UserPicWrapper onClick={onClickUpdateUser(true)}>
          <S.UserPic
            src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn?.picture}`}
            onError={(event) =>
              (event.currentTarget.src = "/images/icons/profile.png")
            }
          />
          <S.SettingIcon isProfile={router.pathname === "/mypage/profile"} />
        </S.UserPicWrapper>
        <S.UserName>{userInfo.name}</S.UserName>
        <S.UserPoint>{replaceNumberComma(userInfo.amount)}</S.UserPoint>
      </S.InfoWrapper>
      <S.MenuWrapper>
        <ul>
          {MY_PAGE_MANU.map((el) => (
            <S.Menu key={uuidv4()} isActive={router.pathname === el.page}>
              <Link href={el.page}>
                <a>{el.name}</a>
              </Link>
            </S.Menu>
          ))}
        </ul>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
