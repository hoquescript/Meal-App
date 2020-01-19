import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList';

const CategoriesMealScreen= (props) => {
    const categoryID = props.navigation.getParam('categoryID');
    const mealData = MEALS.filter(meal => meal.categoryIds.indexOf(categoryID) >= 0) 

    return <MealList mealData={mealData} navigation={props.navigation}/>
}

CategoriesMealScreen.navigationOptions = navigationData => {
    const param = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(item => item.id === param);    
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoriesMealScreen;

