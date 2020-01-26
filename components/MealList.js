import React from 'react'
import { View, FlatList } from 'react-native'
import Meal from '../components/Meal'
import { useSelector } from 'react-redux'

const MealList = ({ mealData, navigation}) => {
    const favouriteList = useSelector(state => state.meals.favouriteMeals)
    // console.log(favouriteList)
    const renderMeals = ({item}) => {
        const isFavourite = favouriteList.some(meal => meal.id === item.id)
        // const isFavourite = false;
        return (
            <Meal 
                title = {item.title}
                image = {item.imageUrl}
                duration = {item.duration}
                complexity = {item.complexity}
                affordability = {item.affordability}
                onClick = {() => navigation.navigate({
                    routeName : 'MealDetails',
                    params : {
                        mealId: item.id,
                        mealTitle: item.title,
                        isFavourite: isFavourite
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

export default MealList
