import React from "react";
import { FlatList, View } from "react-native";
import tw from "tailwind-react-native-classnames";

import favouriteNavData from "../constants/favouriteNavData";
import FavouriteItem from "./FavouriteItem";

const NavFavourites = () => {
    return (
        <View>
            <FlatList
                // eslint-disable-next-line react/no-unstable-nested-components
                ItemSeparatorComponent={() => <View style={[tw`bg-gray-200 mx-10`, { height: 0.5 }]} />}
                data={favouriteNavData.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FavouriteItem {...item} />}
            />
        </View>
    );
};

export default NavFavourites;
