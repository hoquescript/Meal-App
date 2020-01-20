import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import headerButton from "../components/HeaderButton";

const FilterScreen = () => {
    return (
        <View>
            <Text>FavouriteScreen</Text>
        </View>
    )
}

FilterScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item title="Menu" iconName="ios-menu" onPress ={ () => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    };
};

export default FilterScreen
