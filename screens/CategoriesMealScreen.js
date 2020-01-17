import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Meal from '../components/Meal';

const CategoriesMealScreen= (props) => {
    const categoryID = props.navigation.getParam('categoryID');
    const mealData = MEALS.filter(meal => meal.categoryIds.indexOf(categoryID) >= 0) 

    const renderMeals = ({item}) => {
        return (
            <Meal 
                title = {item.title}
                image = {item.imageUrl}
                duration = {item.duration}
                complexity = {item.complexity}
                affordability = {item.affordability}
                onClick = {() => props.navigation.navigate({
                    routeName : 'MealDetails',
                    params : {
                        mealId: item.id
                    }
                })}
            />
        )
    }
    return (
        <View>
            <FlatList keyExtractor={(item, index) => item.id} data={mealData} renderItem={renderMeals}/>
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

