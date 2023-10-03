import styled from "@emotion/styled";
import { Arrow, Page } from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

const Wrapper = styled.div`
  text-align: center;
`;
export default function Pagination(props: IPaginationUIProps): JSX.Element {
  return (
    <Wrapper>
      <Arrow onClick={props.onClickPrevPage}>{`<`}</Arrow>
      {new Array(10).fill("1").map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{ margin: "5px" }}
              isActive={props.startPage + index === props.activedPage}
            >
              {index + props.startPage}
            </Page>
          ),
      )}
      <Arrow onClick={props.onClickNextPage}>{`>`}</Arrow>
    </Wrapper>
  );
}
