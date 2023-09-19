import { Carousel } from "antd";
import { memo } from "react";

const LayoutBanner = (): JSX.Element => {
  return (
    <Carousel>
      <div>
        <img src="/images/carousel/image01.png" />
      </div>
      <div>
        <img src="/images/carousel/image02.png" />
      </div>
      <div>
        <img src="/images/carousel/image03.png" />
      </div>
    </Carousel>
  );
};

export default memo(LayoutBanner);
