import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";

import RiderOptionCardHeader from "./RiderOptionCardHeader";

const RiderOptionCard = () => {
    return (
        <View style={tw`bg-white flex-grow`}>
            <RiderOptionCardHeader />
        </View>
    );
};

export default RiderOptionCard;
