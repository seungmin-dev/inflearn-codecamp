import { Arrow, Page } from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps): JSX.Element {
  console.log("activedPage: ", props.activedPage);
  return (
    <div>
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
    </div>
  );
}
