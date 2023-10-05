import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 0;
`;
export const Title = styled.h2`
  font-size: 24px;
  padding-bottom: 35px;
`;
export const Form = styled.form`
  /* width: 100%; */
`;
export const InputBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 0.5fr; */
  }
`;
export const Span = styled.span`
  font-size: 16px;
  color: #4f4f4f;
  font-weight: bold;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Input = styled.input`
  border: none;
  background-color: #f6f6f6;
  color: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;
`;
export const ErrorMessage = styled.span`
  grid-column-start: 2;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 10px;
  color: #ffd600;
  @media (max-width: 600px) {
    grid-column-start: 1;
  }
`;
export const Button = styled.button`
  display: block;
  margin: 40px auto;
  width: 150px;
  height: 50px;
  background-color: ${(props: IButtonProps) =>
    props.isCompleted ? "#FFD600" : "#bdbdbd"};
  color: ${(props: IButtonProps) => (props.isCompleted ? "black" : "#4f4f4f")};
  border: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: ${(props: IButtonProps) =>
    props.isCompleted ? "pointer" : "not-allowed"};
`;
interface IButtonProps {
  isCompleted: boolean;
}
