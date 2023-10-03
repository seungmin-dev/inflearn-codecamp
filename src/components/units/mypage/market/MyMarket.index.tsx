import { useEffect, useState } from "react";
import { useQueryFetchUseditemsISold } from "../../../../commons/hooks/queries/useQueryFetchUseditemsISold";
import { MyMarketList } from "./list/MyMarketList.index";
import styled from "@emotion/styled";
import { MyMarketSearch } from "./search/MyMarketSearch.index";
import { MyMarketListPicked } from "./list/MyMarketListPicked.index";
import { usePagination } from "../../../../commons/hooks/cutoms/usePagination";
import { useQueryFetchUseditemsCountISold } from "../../../../commons/hooks/queries/useQueryFetchUseditemsCountISold";
import { useQueryFetchUseditemsIPicked } from "../../../../commons/hooks/queries/useQueryFetchUseditemsIPicked";
import { useQueryFetchUseditemsCountIPicked } from "../../../../commons/hooks/queries/useQueryFetchUseditemsCountIPicked";
import Pagination from "../../../commons/paginations/Pagination.index";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 70vh;
  padding-top: 30px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyMarket = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [selectedOpt, setSelectedOpt] = useState("sold");
  const { data, refetch } = useQueryFetchUseditemsISold();
  const { data: pickedData, refetch: pickedRefetch } =
    useQueryFetchUseditemsIPicked();
  const { data: count } = useQueryFetchUseditemsCountISold();
  const { data: pickedCount } = useQueryFetchUseditemsCountIPicked();

  const pagenationArgs = usePagination({
    refetch: selectedOpt === "sold" ? refetch : pickedRefetch,
    count:
      selectedOpt === "sold"
        ? count?.fetchUseditemsCountISold
        : pickedCount?.fetchUseditemsCountIPicked,
  });

  useEffect(() => {
    if (selectedOpt === "sold") void refetch({ search });
    else if (selectedOpt === "pick") void pickedRefetch({ search });
  }, [selectedOpt, search]);

  return (
    <Wrapper>
      <MyMarketSearch setSelectedOpt={setSelectedOpt} setSearch={setSearch} />
      {selectedOpt === "sold" ? (
        <MyMarketList data={data} />
      ) : (
        <MyMarketListPicked data={pickedData} />
      )}
      <Footer>
        <Pagination {...pagenationArgs} />
      </Footer>
    </Wrapper>
  );
};
