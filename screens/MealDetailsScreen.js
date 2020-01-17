import React from 'react'
import { View, Text } from 'react-native'
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    const mealDetails = MEALS.find(meal => meal.id !== mealId); 
    return (
        <View>
            <Text>{mealDetails.title}</Text>
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealDetails = MEALS.find(meal => meal.id !== mealId); 
    return { 
       headerTitle : mealDetails.title 
    }
}

export default MealDetailsScreen
