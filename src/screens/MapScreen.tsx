import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Map from "src/components/Map";
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Text>another half</Text>
            </View>
        </View>
    );
};

export default MapScreen;
