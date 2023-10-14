import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMapMarker } from "../../../../commons/hooks/cutoms/useMapMarker";

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
  setPickedCoord: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lon: number;
    }>
  >;
  isEdit: boolean;
}

export default function EditMap(props: IMapProps): JSX.Element {
  const { markerMaker } = useMapMarker({
    setPickedCoord: props.setPickedCoord,
  });
  const [fixed, setFixed] = useState(true);
  const [latlon, setLatlon] = useState({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    if (!props.isEdit) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("navigator position : ", position);
        setLatlon({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      setLatlon({ lat: props.lat, lon: props.lon });
    }
    setFixed(true);
  }, [fixed]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(latlon.lat, latlon.lon),
          level: 1,
        };

        if (!options.center.La) setFixed(false);

        const map = new window.kakao.maps.Map(container, options);

        console.log("options center : ", options.center);
        console.log("options center Ma : ", options.center.Ma);

        console.log("latlon lat : ", latlon.lat);
        console.log("latlon lon : ", latlon.lon);
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        console.log("marker : ", marker);

        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click", markerMaker(marker));
      });
    };
  }, [latlon]);

  return (
    <>
      <Container id="map"></Container>
    </>
  );
}
