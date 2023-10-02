import Link from "next/link";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import * as S from "./MyProfile.styles";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRef, useState } from "react";
import { useMutationUpdateUser } from "../../../../commons/hooks/mutations/useMutationUpdateUser";
import { useMuatationUploadFile } from "../../../../commons/hooks/mutations/useMutationUploadFile";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/stores";
import { replaceNumberComma } from "../../../../commons/libraries/utils";

export const MyProfile = (): JSX.Element => {
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
      </S.InfoWrapper>
      <S.PointWrapper>
        <S.PointTitle>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          내 포인트
        </S.PointTitle>
        <S.UserPoint>{replaceNumberComma(userInfo.amount)} P</S.UserPoint>
      </S.PointWrapper>
    </S.Wrapper>
  );
};
