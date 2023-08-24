import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 80px auto;
  padding: 80px 100px;
  box-shadow: 0 0 10px #ddd;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
`;
export const Form = styled.form`
  display: block;
  padding: 50px 0;
  width: 100%;
`;
export const InputSet = styled.div`
  margin-bottom: 40px;
`;
export const SmallTitle = styled.p`
  font-weight: bold;
  color: 16px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border: 1px solid #bdbdbd;
  color: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 14px;
`;
export const Button = styled.button`
  margin: 40px auto;
  width: 150px;
  height: 50px;
  background-color: ${(props: IButtonProps) =>
    props.isCompleted ? "#FFD600" : "#bdbdbd"};
  color: ${(props: IButtonProps) => (props.isCompleted ? "black" : "#4f4f4f")};
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
interface IButtonProps {
  isCompleted: boolean;
}
