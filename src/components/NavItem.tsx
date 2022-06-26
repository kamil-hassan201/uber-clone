import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavItem = (props: navDataT) => {
    return (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image style={{ width: 120, height: 120, resizeMode: "contain" }} source={{ uri: props.image }} />
                <Text style={tw`mt-2 text-lg font-semibold`}> {props.title} </Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type="antdesign"
                    name="arrowright"
                    color="white"
                    tvParallaxProperties={undefined}
                />
            </View>
        </TouchableOpacity>
    );
};

export default NavItem;
