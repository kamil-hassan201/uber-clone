import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import routes from "src/constants/routes";
import tw from "tailwind-react-native-classnames";

const NavigateOptionArea = () => {
    const navigation = useNavigation<NavT>();
    return (
        <View style={tw`flex-row bg-white justify-evenly py-2 mb-12 mt-auto mx-12 border-t border-gray-100`}>
            <TouchableOpacity
                onPress={() => navigation.navigate(routes.RIDE_OPTION)}
                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
            >
                <Icon name="car" type="font-awesome" color="white" size={16} />
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row justify-between  w-24 px-4 py-3 rounded-full`}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                <Text style={tw`text-black text-center`}>Eats</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NavigateOptionArea;
