import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import riderOption from "src/constants/riderOption";
import tw from "tailwind-react-native-classnames";

import RiderOptionCardHeader from "./RiderOptionCardHeader";

const RiderOptionCard = () => {
    const [selectedOption, setSelectedOption] = useState<RiderOptionT | null>(null);
    return (
        <View style={tw`bg-white flex-grow`}>
            <RiderOptionCardHeader />
            <FlatList
                keyExtractor={(item) => item.id}
                data={riderOption.data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedOption(item);
                        }}
                        style={tw`flex-row justify-between px-10 items-center ${
                            item.id === selectedOption?.id ? "bg-gray-200" : ""
                        }`}
                    >
                        <Image
                            style={{ width: 100, height: 100, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-semibold`}> {item.title} </Text>
                            <Text> Travel Time..... </Text>
                        </View>
                        <Text style={tw`text-xl`}> $99 </Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={tw`bg-black py-3 m-3 mb-6 ${!selectedOption ? "bg-gray-200" : ""}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose {selectedOption?.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RiderOptionCard;
