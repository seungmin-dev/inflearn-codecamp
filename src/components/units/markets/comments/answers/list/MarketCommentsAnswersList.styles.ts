import { EnterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const AnswerWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
`;
export const Row = styled.div`
  width: 95%;
  display: grid;
  grid-template:
    "pic name icons" 1.8fr
    "pic contents contents" 2.5fr
    "date date date" 1fr / 0.6fr 10fr 0.5fr;
`;
export const ReplyIcon = styled(EnterOutlined)`
  width: 5%;
  font-size: 1.5rem;
  transform: scale(-1, 1);
`;
