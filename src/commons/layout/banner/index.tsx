import { Carousel } from "antd";

export default function LayoutBanner(): JSX.Element {
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
}
