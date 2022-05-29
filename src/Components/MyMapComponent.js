import { useEffect, useRef, useState } from "react";
import Searcher from "./Searcher";


function MyMapComponent() {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: -34.603722, lng: 	-58.381592 });

  /**
   * Because google.maps.Map requires an Element as a constructor parameter,
   * useRef is needed to maintain a mutable object
   * that will persist for the lifetime of the component.
   */
  useEffect(() => {
    console.log(ref.current);
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // Add marker
  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom: 5 });
    }
    
    new window.google.maps.Marker({
      position: center,
      map
    });
  }, [map, center]);

  return (
    <>
      <Searcher setCenter={setCenter} />
      <div style={{ height: "20px" }} />
      <div ref={ref} style={{ width: "80%", height: "50%",marginLeft:"28px" }} />
    </>
  );
}

export default MyMapComponent;
