import { GOOGLE_MAP_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import routes from "src/constants/routes";
import { setDestination } from "src/redux/navSlice";
import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavT>();
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={[tw`bg-white flex-1`]}>
                <Text style={tw`text-center py-5 text-xl`}>Good Morning, Kamil!</Text>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <GooglePlacesAutocomplete
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details?.geometry.location,
                                    description: data.description,
                                }),
                            );
                            navigation.navigate(routes.RIDE_OPTION);
                        }}
                        // 'details' is provided when fetchDetails = true
                        fetchDetails
                        styles={toInputBoxStyles}
                        query={{ key: GOOGLE_MAP_API_KEY, language: "en", components: "country:bd" }}
                        placeholder="From Where?"
                        debounce={40}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        enablePoweredByContainer={false}
                        enableHighAccuracyLocation
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
