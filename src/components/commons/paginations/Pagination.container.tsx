import type { MouseEvent } from "react";
import { useState } from "react";
import type { IPaginationProps } from "./Pagination.types";
import PaginationUI from "./Pagination.presenter";

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    setActivedPage(startPage + 10);
    void props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
