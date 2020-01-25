import React from 'react'
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList';

const CategoriesMealScreen= (props) => {

    const categoryID = props.navigation.getParam('categoryID');
    const mealData = useSelector(state => state.meals.filteredMeals);
    const categorizedMeal = mealData.filter(meal => meal.categoryIds.indexOf(categoryID) >= 0) 

    return <MealList mealData={categorizedMeal} navigation={props.navigation}/>
}

CategoriesMealScreen.navigationOptions = navigationData => {
    const param = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(item => item.id === param);    
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoriesMealScreen;

