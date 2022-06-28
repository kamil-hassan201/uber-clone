import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Map from "src/components/Map";
import RiderOptionCard from "src/components/RiderOptionCard";
import tw from "tailwind-react-native-classnames";

import NavigateCard from "./NavigateCard";

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <View style={{ flex: 1 }}>
            <View style={tw`flex-1`}>
                <Map />
            </View>
            <View style={tw`flex-1`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                    <Stack.Screen name="RideOptionCard" component={RiderOptionCard} options={{ headerShown: false }} />
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;
