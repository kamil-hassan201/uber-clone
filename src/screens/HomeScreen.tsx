import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import NavOptions from "src/components/NavOptions";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => (
    <SafeAreaView style={tw`bg-white`}>
        <View style={tw`p-5`}>
            <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={{ uri: "https://links.papareact.com/gzs" }} />
            <NavOptions />
        </View>
    </SafeAreaView>
);

export default HomeScreen;
