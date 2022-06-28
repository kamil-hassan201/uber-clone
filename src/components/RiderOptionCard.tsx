import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import routes from "src/constants/routes";
import tw from "tailwind-react-native-classnames";

const RiderOptionCard = () => {
    const navigation = useNavigation<NavT>();

    return (
        <View style={tw`bg-white flex-grow`}>
            <View>
                <View style={tw`absolute top-3 left-5 `}>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("Pressed");
                            navigation.navigate(routes.NAVIGATE_CARD);
                        }}
                        style={tw`p-3`}
                    >
                        <Icon name="chevron-left" type="fontawesome" />
                    </TouchableOpacity>
                </View>

                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
        </View>
    );
};

export default RiderOptionCard;
