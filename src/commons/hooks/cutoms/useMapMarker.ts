interface MapMarkerArgs {
  setPickedCoord: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lon: number;
    }>
  >;
}
export const useMapMarker = ({ setPickedCoord }: MapMarkerArgs) => {
  const markerMaker = (marker) => (e) => {
    marker.setPosition(e.latLng);

    setPickedCoord({ lat: e.latLng.La, lon: e.latLng.Ma });
  };
  return { markerMaker };
};
