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

    setPickedCoord({ lat: e.latLng.Ma, lon: e.latLng.La });
  };
  return { markerMaker };
};
