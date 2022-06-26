import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { memo } from "react";
import HomeScreen from "src/screens/HomeScreen";

export type RootStackParamList = {
    HomeScreen: undefined;
    MapScreen: undefined;
};

const Navigator = memo(() => {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapScreen" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export default Navigator;
