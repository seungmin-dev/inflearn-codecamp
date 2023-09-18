import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 257px;
`;
export const Card = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 14px;
  box-shadow: 5px 5px 10px #bbb;
  cursor: pointer;
`;
export const CardImg = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 14px 14px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardInfo = styled.div`
  padding: 10px 20px;
  width: 100%;
  height: 50%;
  background-color: white;
  border-radius: 0 0 14px 14px;
`;
export const CardTitle = styled.h2`
  font-size: 1.3rem;
  padding: 10px 0 12px;
`;
export const CardBelowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
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
  padding-top: 5px;
`;
