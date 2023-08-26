import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const List = styled.div`
  width: 100%;
`;
export const CommentWrapper = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template:
    "pic name icons" 1.8fr
    "pic contents contents" 2.5fr
    "date date date" 1fr / 0.6fr 10fr 0.5fr;
  padding-bottom: 30px;
`;
