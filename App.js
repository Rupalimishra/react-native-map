import React, { useState } from "react";

import MapView, { Marker } from "react-native-maps";

const App = () => {
  const [region, setRegion] = useState({
    latitude: 26.41187,
    longitude: 80.38332,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 26.41187, longitude:  80.38332 }} />
    </MapView>
  );
};

export default App;