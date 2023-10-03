import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 70px 0;
`;
export const Banner = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  img {
    width: 130%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: -240px;
    right: -320px;
    object-fit: contain;
    @media (max-width: 600px) {
      width: 170%;
      top: 0;
      right: -300px;
    }
  }
`;
export const TextWrapper = styled.div`
  position: absolute;
  z-index: 10;
  padding: 80px 0 0 50px;
`;
export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const Text = styled.span``;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    height: 280px;
  }
`;
export const Button = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 0 30px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #4f4f4f;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    220deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(205, 205, 205, 1) 100%
  );
  transition: transform 0.2s ease 0s;
  img {
    position: absolute;
    z-index: 10;
    width: 100px;
    right: -5px;
    bottom: -5px;
    transition: all 0.2s ease 0s;
  }
  :hover {
    transform: translateY(-5px);
    div {
      opacity: 1;
    }
    img {
      transform: scale(120%);
    }
  }
`;
export const Point = styled.span`
  position: absolute;
  z-index: 15;
`;
export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  z-index: 0;
  background-image: linear-gradient(
    220deg,
    rgba(255, 223, 98, 1) 0%,
    rgba(255, 167, 119, 1) 100%
  );
  transition: opacity 0.2s ease 0s;
`;
