import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList';

const FavouriteScreen = (props) => {
    const mealData = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm3')
    return <MealList mealData={mealData} navigation={props.navigation}/>
}

FavouriteScreen.navigationOptions = navData => ({
    headerTitle: 'Favourite Meals'
})

export default FavouriteScreen
