import styled from "@emotion/styled";

export const CommentWriterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export const SmallTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 10px;
`;
export const StarWrapper = styled.div`
  margin-bottom: 10px;
`;
export const Star = styled.img`
  width: 20px;
`;
export const CommentsInputWrpper = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  margin-bottom: 30px;
`;

export const CommentsNewWriter = styled.input`
  border: none;
  border: 1px solid #bdbdbd;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
export const CommentsNewPassword = styled.input`
  border: none;
  border: 1px solid #bdbdbd;
  height: 30px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
`;
export const CommentsTextarea = styled.textarea`
  border: none;
  width: 100%;
  height: 100px;
  padding: 15px;
  line-height: 1.4;
  font-size: 0.8rem;
  letter-spacing: -0.5px;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const CommentsUpdateButton = styled.button`
  border: none;
  background-color: #ffd600;
  color: #000;
  padding: 12px 25px;
  cursor: pointer;
`;
export const CommentsInputBottom = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsLimit = styled.span`
  color: #bdbdbd;
  font-size: 0.9rem;
  padding-left: 15px;
`;
export const CommentsSubmitButton = styled.button`
  border: none;
  background-color: black;
  color: #fff;
  padding: 12px 25px;
  cursor: pointer;
`;
