import styled from "@emotion/styled";

export const TextBox = styled.div`
  border: 1px solid #bdbdbd;
`;
export const Textarea = styled.textarea`
  border: none;
  width: 100%;
  height: 130px;
  padding: 15px;
  line-height: 1.4;
  font-size: 0.8rem;
  letter-spacing: -0.5px;
  resize: none;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const TextFooter = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-top: 1px solid #bdbdbd;
  padding-left: 10px;
  justify-content: space-between;
`;
export const TextLeng = styled.div`
  text-align: right;
  line-height: 30px;
  font-size: 14px;
  color: #bdbdbd;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  font-weight: bold;
  padding: 5px 10px;
`;

interface ITextareaProps {
  isEdit: boolean;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  leng: number;
  defaultText: string;
}
export const TextareaUI = ({
  isEdit,
  onChangeTextarea,
  leng,
  defaultText,
}: ITextareaProps) => {
  return (
    <TextBox>
      <Textarea
        onChange={onChangeTextarea}
        defaultValue={defaultText}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <TextFooter>
        <TextLeng>{leng} / 100</TextLeng>
        <Button>{isEdit ? "수정" : "등록"}하기</Button>
      </TextFooter>
    </TextBox>
  );
};
