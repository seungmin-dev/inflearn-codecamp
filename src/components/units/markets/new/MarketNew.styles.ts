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
  font-size: 16px;
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
  padding-top: 10px;
  font-size: 14px;
  color: #ffd600;
`;
export const MapWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: grid;
  grid-template:
    "map gps" 0.5fr
    "map address" 1fr / 0.7fr 1fr;
  gap: 20px;
  div:first-child {
    grid-area: map;
  }
  div:nth-child(2) {
    grid-area: gps;
    input {
      margin-bottom: 0;
    }
  }
  div:nth-child(3) {
    grid-area: address;
  }
  div input {
    margin-bottom: 10px;
  }
`;
export const LocateInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 100px;
  }
`;
export const RadioInput = styled.input`
  appearance: none;
  vertical-align: middle;
  border: 2px solid #ffd600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 10px;
  transition: border 0.3s ease-in-out;
  :active {
    color: #ffd600;
    border: 1px solid #ffd600;
  }
  :checked {
    color: #ffd600;
    border: 5px solid #ffd600;
  }
  :focus-visible {
    outline: 2px solid #ffd600;
    outline-offset: 2px;
  }
`;
export const Label = styled.label`
  padding-right: 20px;
  cursor: pointer;
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
