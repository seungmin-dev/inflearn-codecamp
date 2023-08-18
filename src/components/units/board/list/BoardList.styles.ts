import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  padding: 20px;
  margin: 20px auto;
  padding: 20px;
`;
export const Title = styled.h2`
  text-align: center;
  padding-bottom: 40px;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Card = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 14px;
  box-shadow: 5px 5px 10px #bbb;
  cursor: pointer;
`;
export const CardInfo = styled.div`
  padding: 10px 20px;
`;
export const CardTitle = styled.h2`
  font-size: 1.3rem;
  padding: 10px 0 12px;
`;
export const CardBelowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 50%;
  background: ${(props: ICardImg) =>
    props.imageUrl
      ? `url(https://storage.googleapis.com/${props.imageUrl})`
      : "black"};
  background-position: center;
  background-size: cover;
  border-radius: 14px 14px 0 0;
`;
interface ICardImg {
  imageUrl: string;
}
export const CardProfileWrapper = styled.div``;
export const CardProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const CardProfileImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;
export const CardWriter = styled.span`
  font-size: 0.85rem;
`;
export const CardThumbsUpImg = styled.img`
  width: 20px;
  margin-bottom: 5px;
`;
export const CardCreatedAt = styled.span`
  font-size: 0.7rem;
  color: #828282;
`;
export const CardLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardLike = styled.span`
  font-size: 0.9rem;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  margin-bottom: 40px;
`;
export const SearchInput = styled.input`
  border: none;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 8px;
  height: 36px;
  flex-grow: 1;
  margin-right: 20px;
`;
export const SearchDate = styled.input`
  border: none;
  border: 1px solid #bdbdbd;
  padding: 8px;
  width: 170px;
  height: 36px;
  font-size: 0.8rem;
  ::placeholder {
    color: #bdbdbd;
  }
  margin-right: 20px;
`;
export const SearchButton = styled.button`
  width: 80px;
  height: 36px;
  border: none;
  background-color: #000;
  color: white;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 4px;
`;
export const ListWrapper = styled.div``;
export const ListHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #000;
  font-size: 0.9rem;
`;
export const ListHeaderTextIndex = styled.h4`
  text-align: center;
  width: 80px;
`;
export const ListHeaderTextTitle = styled.h4`
  text-align: center;
  width: 420px;
`;
export const ListHeaderTextWriter = styled.h4`
  text-align: center;
  width: 120px;
`;
export const ListHeaderTextDate = styled.h4`
  text-align: center;
  width: 140px;
`;
export const ListBody = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`;
export const ListBodyLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 auto 1.5 1.5;
  padding: 7px 0;
  border-top: 0.5px solid #bdbdbd;
`;
export const ListBodyTextIndex = styled.div`
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
  width: 80px;
`;
export const ListBodyTextTitle = styled.div`
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
  width: 420px;
  cursor: pointer;
`;
export const ListBodyTextWriter = styled.div`
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
  width: 120px;
`;
export const ListBodyTextDate = styled.div`
  text-align: center;
  color: #4f4f4f;
  font-size: 0.9rem;
  width: 140px;
`;
export const Pagenation = styled.span``;
export const NewButton = styled.button`
  height: 36px;
  border: none;
  background-color: #fff;
  color: black;
  font-weight: bold;
  padding: 5px 20px;
  font-size: 0.8rem;
  border-radius: 4px;
  border: 0.5px solid #f2f2f2;
  cursor: pointer;
`;
