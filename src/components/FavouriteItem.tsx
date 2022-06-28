import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const FavouriteItem = (props: favNavProps) => {
    return (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                color="white"
                size={18}
                name={props.icon}
                type="ionicon"
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{props.location}</Text>
                <Text style={tw`text-gray-500`}> {props.destination}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default FavouriteItem;
