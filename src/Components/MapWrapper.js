import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MyMapComponent";


/*
  The basic usage of this component (Wrapper)
  is to wrap child components that depend on Maps JavaScript API.
  The Wrapper component also accepts
  a render prop for rendering loading components
  or handling errors in loading the Maps JavaScript API.
*/

const render = (status) => {
  if (status === Status.LOADING) return "Loading...";
  if (status === Status.FAILURE) return "Error";
  return null;
};

const MapWrapper = () => {
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={render}>
      <MyMapComponent />
    </Wrapper>
  );
};

export default MapWrapper;
