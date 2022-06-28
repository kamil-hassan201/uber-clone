import { GOOGLE_MAP_API_KEY } from "@env";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import NavOptions from "src/components/NavOptions";
import { setDestination, setOrigin } from "src/redux/navSlice";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{ uri: "https://links.papareact.com/gzs" }}
                />
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
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
