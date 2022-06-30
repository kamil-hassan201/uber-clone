import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Map from "src/components/Map";
import RiderOptionCard from "src/components/RiderOptionCard";
import routes from "src/constants/routes";
import tw from "tailwind-react-native-classnames";

import NavigateCard from "./NavigateCard";

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation<NavT>();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate(routes.HOME_SCREEN)}
                style={tw`absolute top-16 left-8 bg-gray-200 z-50 p-3 rounded-full shadow-lg`}
            >
                <Icon name="menu" />
            </TouchableOpacity>
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
