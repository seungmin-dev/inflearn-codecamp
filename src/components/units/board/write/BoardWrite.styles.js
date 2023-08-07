import styled from "@emotion/styled";

export const Container = styled.div`
  width: 800px;
  padding: 20px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 5px 5px 20px #bdbdbd;
`;
export const Title = styled.h2`
  text-align: center;
  padding-bottom: 40px;
`;
export const BoxWrapper = styled.div`
  padding-bottom: 10px;
`;
export const SmallTitle = styled.p`
  margin: 0;
  padding: 0 0 8px 0;
  font-size: 0.9rem;
`;
export const Input = styled.input`
  border: 1px solid #dadada;
  width: 100%;
  height: 35px;
  padding: 8px;
  ::placeholder {
    color: #cacaca;
  }
  font-size: 0.8rem;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
export const Error = styled.span`
  font-size: 0.8rem;
  color: red;
`;
export const ZipCodeButton = styled.button`
  border: none;
  height: 35px;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
`;
export const SubmitButton = styled.button`
  border: none;
  height: 35px;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  padding: 11px 40px;
  margin: 0 auto;
  background-color: ${(props) => (props.isActive ? "#FFD600" : "#dcdcdc")};
`;
export const RadioInput = styled.input`
  padding-left: 5px;
  border-color: "FFD600";
  ::selection {
    border-color: blue;
  }
`;
