import React, { memo } from "react";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const Map = memo(() => {
    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
});

export default Map;
