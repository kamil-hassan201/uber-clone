import React from "react";
import { FlatList, Text } from "react-native";
import navData from "src/constants/navData";

const NavOptions = () => (
    <FlatList
        keyExtractor={(item) => item.id}
        data={navData.data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
    />
);

export default NavOptions;
