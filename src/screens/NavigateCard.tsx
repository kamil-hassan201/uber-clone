import { GOOGLE_MAP_API_KEY } from "@env";
import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "src/redux/navSlice";
import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
    const dispatch = useDispatch();
    return (
        <View style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Kamil!</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        dispatch(
                            setOrigin({
                                location: details?.geometry.location,
                                description: data.description,
                            }),
                        );
                        dispatch(setDestination(null));
                    }}
                    fetchDetails
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    query={{ key: GOOGLE_MAP_API_KEY, language: "en", components: "country:bd" }}
                    placeholder="From Where?"
                    debounce={40}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    enableHighAccuracyLocation
                />
            </View>
        </View>
    );
};

export default NavigateCard;
