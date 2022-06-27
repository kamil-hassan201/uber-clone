import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Map from "src/components/Map";
import tw from "tailwind-react-native-classnames";

import NavigateCard from "./NavigateCard";

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                    <Stack.Screen name="AnotherCard" component={NavigateCard} />
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;
