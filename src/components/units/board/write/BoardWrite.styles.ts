import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  padding: 20px;
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
export const ImageUploadWrapper = styled.div`
  display: flex;
  font-size: 36px;
`;
export const BoxWrapper = styled.div`
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
  margin-bottom: 5px;
  color: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const Error = styled.span`
  font-size: 0.8rem;
  color: red;
`;
export const ZipCodeButton = styled.button`
  border: none;
  height: 50px;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
export const SubmitButton = styled.button`
  margin: 40px auto;
  width: 150px;
  height: 50px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isCompleted ? "#FFD600" : "#bdbdbd"};
  color: ${(props: ISubmitButtonProps) =>
    props.isCompleted ? "black" : "#4f4f4f"};
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
interface ISubmitButtonProps {
  isCompleted: boolean;
}

export const RadioInput = styled.input`
  padding-left: 5px;
  border-color: "FFD600";
  ::selection {
    border-color: blue;
  }
`;
