import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import routes from "src/constants/routes";
import tw from "tailwind-react-native-classnames";

const RiderOptionCardHeader = () => {
    const navigation = useNavigation<NavT>();

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(routes.NAVIGATE_CARD);
                }}
                style={[tw`absolute top-3 left-5 p-3`, { zIndex: 1 }]}
            >
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>

            <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
        </View>
    );
};

export default RiderOptionCardHeader;
