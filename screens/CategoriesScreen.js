import React from "react";
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealType from "../components/MealType";

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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: 150,
//         margin: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#333"
//     }
// });

export default CategoriesScreen;
