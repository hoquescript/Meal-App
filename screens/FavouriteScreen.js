import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import headerButton from "../components/HeaderButton";

const FavouriteScreen = (props) => {
    const mealData = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm3')
    return <MealList mealData={mealData} navigation={props.navigation}/>
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
