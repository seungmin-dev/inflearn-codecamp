import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 10px;
  cursor: pointer;
  object-fit: contain;
`;
export const UploadButton = styled.button`
  width: 180px;
  height: 180px;
  padding: 5px;
  background-color: #bdbdbd;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  span {
    color: #4f4f4f;
    font-size: 2rem;
  }
  span:first-of-type {
    padding: 0;
    margin-bottom: 10px;
  }
  span:last-child {
    font-size: 1rem;
  }
`;
