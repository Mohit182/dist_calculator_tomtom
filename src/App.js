import { useEffect, useRef, useState } from "react";
import "./App.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(75.8108);
  const [latitude, setLatitude] = useState(26.8640);

  useEffect(() => {
    let map = tt.map({
      key: "1zYXDgLZZtd5NDEqhXnqNgNPEv3fErG4",
      container: mapElement.current,
      center: [longitude, latitude],
      zoom: 15,
    });

    setMap(map);
  }, []);
  return (
    <div className="app">
      <div ref={mapElement} className="map"></div>
    </div>
  );
}

export default App;
