import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Meal from '../components/Meal'

const MealList = ({ mealData, navigation}) => {
    const renderMeals = ({item}) => {
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

export default MealList
