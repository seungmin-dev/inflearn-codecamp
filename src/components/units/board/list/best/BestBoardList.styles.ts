import styled from "@emotion/styled";

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
  imageUrl: string[];
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
