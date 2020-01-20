import React from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealType from "../components/MealType";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import headerButton from "../components/HeaderButton";

const CategoriesScreen = props => {
    const dataRender = itemData => (
        <MealType
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() =>
                props.navigation.navigate({
                    routeName: "CategoriesMeal",
                    params: {
                        categoryID: itemData.item.id
                    }
                })
            }
        />
    );
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={dataRender}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
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

export default CategoriesScreen;
