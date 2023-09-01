import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
`;
export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  margin: 40px auto;
  width: 150px;
  height: 50px;
  float: right;
  background-color: #bdbdbd;
  color: #4f4f4f;
  border: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    color: black;
  }
`;
