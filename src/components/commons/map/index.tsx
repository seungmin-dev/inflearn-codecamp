import { useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 85%;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapProps {
  lat?: number;
  lon?: number;
}

export default function Map(props: IMapProps): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(props.lat, props.lon),
          level: 1,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          props.lat,
          props.lon,
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <Container id="map"></Container>
    </>
  );
}
