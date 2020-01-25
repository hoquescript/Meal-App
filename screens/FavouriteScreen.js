import React from 'react'
import { useSelector } from 'react-redux'

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import headerButton from "../components/HeaderButton";

import MealList from '../components/MealList';

const FavouriteScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favouriteMeals) 
    // const mealData = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm3')
    return <MealList mealData={favMeals} navigation={props.navigation}/>
}

FavouriteScreen.navigationOptions = navData => ({
    headerTitle: 'Favourite Meals',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={headerButton}>
            <Item title="Menu" iconName="ios-menu" onPress ={ () => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    )
})

export default FavouriteScreen
