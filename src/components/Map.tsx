import { GOOGLE_MAP_API_KEY } from "@env";
import React, { memo, useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "src/redux/navSlice";
import tw from "tailwind-react-native-classnames";

const Map = memo(() => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    const mapRef = useRef<MapView | null>(null);

    useEffect(() => {
        if (!origin || !destination) return;
        mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_API_KEY}`)
                .then((res) => res.json())
                .then((data) => dispatch(setTravelTimeInformation(data.rows[0].elements[0])));
        };
        getTravelTime();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [destination, origin]);
    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAP_API_KEY}
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{ latitude: origin?.location.lat, longitude: origin?.location.lng }}
                    title="Origin"
                    description={origin?.description}
                    identifier="origin"
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{ latitude: destination?.location.lat, longitude: destination?.location.lng }}
                    title="Destination"
                    description={destination?.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
});

export default Map;
