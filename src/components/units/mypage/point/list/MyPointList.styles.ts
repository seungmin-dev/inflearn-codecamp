import styled from "@emotion/styled";

export const ListWrapper = styled.div``;
export const ListHeader = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px repeat(3, 250px);
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const ListHeaderTextIndex = styled.h4``;
export const ListHeaderTextTitle = styled.h4``;
export const ListHeaderTextStatus = styled.h4``;
export const ListHeaderTextPrice = styled.h4``;
export const ListHeaderTextBalance = styled.h4``;
export const ListHeaderTextDate = styled.h4``;
export const ListBody = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`;
export const ListBodyLine = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px repeat(3, 250px);
  justify-content: space-between;
  flex: 1 auto 1.5 1.5;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
`;
export const ListBodyTextIndex = styled.div``;
export const ListBodyTextTitle = styled.div`
  cursor: pointer;
`;
export const ListBodyTextStatus = styled.div`
  font-weight: bold;
  color: ${(props: IListProps) =>
    props.status === "판매" ? "#ffd600" : "#0031E0"};
`;
export const ListBodyTextPrice = styled.div`
  font-weight: bold;
  color: ${(props: IListProps) =>
    props.status === "판매" ? "#ffd600" : "#0031E0"};
`;
interface IListProps {
  status: string;
}
export const ListBodyTextDate = styled.div``;
export const ListBodyTextBalance = styled.div`
  font-weight: 700;
`;

export const BuyingListHeader = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 350px 135px 135px 130px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const BuyingListBody = styled.div`
  border-bottom: 1px solid #000;
`;
export const BuyingListBodyLine = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 350px 135px 135px 130px;
  justify-content: space-between;
  flex: 1 auto 1.5 1.5;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
`;

export const SellingListHeader = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 400px 175px 175px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const SellingListBody = styled.div`
  border-bottom: 1px solid #000;
`;
export const SellingListBodyLine = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 400px 175px 175px;
  justify-content: space-between;
  /* flex: 1 auto 1.5 1.5; */
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
`;

export const LoadingListHeader = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 400px 150px 200px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const LoadingListBody = styled.div`
  border-bottom: 1px solid #000;
`;
export const LoadingListBodyLine = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 150px 400px 150px 200px;
  justify-content: space-between;
  flex: 1 auto 1.5 1.5;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
`;

export const Pagination = styled.div`
  text-align: center;
  margin-top: 40px;
`;
