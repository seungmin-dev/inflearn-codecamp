import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const List = styled.div`
  width: 100%;
`;
export const CommentWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template:
    "pic name icons" 1.8fr
    "pic contents contents" auto
    "date date date" 1fr / 0.6fr 10fr 0.5fr;
  padding-bottom: 20px;
`;
