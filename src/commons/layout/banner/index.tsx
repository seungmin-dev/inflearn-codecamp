import styled from "@emotion/styled";
import { Carousel } from "antd";
import { memo } from "react";

const Wrapper = styled.div`
  width: 1200px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  margin: 20px auto 20px;
  div {
    width: 100%;
    height: 400px;
    height: auto;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  overflow: hidden;
`;

const LayoutBanner = (): JSX.Element => {
  return (
    <Wrapper>
      <Carousel>
        <div>
          <Img src="/images/carousel/image02.jpg" />
        </div>
        <div>
          <Img src="/images/carousel/image01.jpg" />
        </div>
        <div>
          <Img src="/images/carousel/image03.jpg" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default memo(LayoutBanner);
