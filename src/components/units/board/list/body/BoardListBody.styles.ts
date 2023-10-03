import styled from "@emotion/styled";

export const ListWrapper = styled.div``;
export const ListHeader = styled.div`
  display: grid;
  width: 100%;
  height: 40px;
  flex-wrap: wrap;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
  grid-template-columns: 0.5fr 5fr 1.5fr 1fr;
  text-align: center;
`;
export const ListHeaderTextIndex = styled.h4``;
export const ListHeaderTextTitle = styled.h4``;
export const ListHeaderTextWriter = styled.h4``;
export const ListHeaderTextDate = styled.h4``;
export const ListBody = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`;
export const ListBodyLine = styled.div`
  display: grid;
  width: 100%;
  height: 40px;
  /* justify-content: space-between; */
  align-items: center;
  flex: 1 auto 1.5 1.5;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  grid-template-columns: 0.5fr 5fr 1.5fr 1fr;
  text-align: center;
`;
export const ListBodyTextIndex = styled.div`
  color: #4f4f4f;
  font-size: 0.9rem;
`;
export const ListBodyTextTitle = styled.div`
  color: #4f4f4f;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const ListBodyTextWriter = styled.div`
  color: #4f4f4f;
  font-size: 0.9rem;
`;
export const ListBodyTextDate = styled.div`
  color: #4f4f4f;
  font-size: 0.9rem;
`;
