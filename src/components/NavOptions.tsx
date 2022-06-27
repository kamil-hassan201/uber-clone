import React from "react";
import { FlatList } from "react-native";
import navData from "src/constants/navData";

import NavItem from "./NavItem";

const NavOptions = () => {
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={navData.data}
            horizontal
            renderItem={({ item }) => <NavItem {...item} />}
        />
    );
};

export default NavOptions;
