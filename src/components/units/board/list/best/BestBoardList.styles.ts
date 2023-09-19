import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 1200px;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
export const Card = styled.div`
  height: 350px;
  box-shadow: 2px 2px 10px #ddd;
  cursor: pointer;
`;
export const CardImg = styled.div`
  width: 100%;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardInfo = styled.div`
  padding: 10px 20px;
  width: 100%;
  background-color: white;
`;
export const CardTitle = styled.h2`
  font-size: 1.3rem;
  padding: 5px 0 12px;
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
