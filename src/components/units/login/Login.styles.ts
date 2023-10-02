import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
`;
export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  padding: 0 15px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 50px;
  border: 2px solid #d1d6db;
  ::placeholder {
    color: #8b95a1;
  }
`;
export const ErrorText = styled.div`
  width: 100%;
  height: 24px;
  color: #ffd600;
  padding: 4px 12px;
  font-size: 0.9rem;
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease 0s;
  :hover {
    background-color: #484848;
  }
`;
export const Signup = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #08f;
  cursor: pointer;
  transition: color 0.2s ease 0s;
  :hover {
    color: #0064d9;
  }
`;
