import React from 'react'
import { View, Text } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesMealScreen= (props) => {
    const param = props.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(item => item.id === param);    
    return (
        <View>
            <Text>CategoriesMealScreen</Text>
        </View>
    )
}
CategoriesMealScreen.navigationOptions = navigationData => {
    const param = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(item => item.id === param);    
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoriesMealScreen;

