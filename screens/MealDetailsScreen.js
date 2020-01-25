import React from "react";
import { useSelector } from 'react-redux'
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const mealData = useSelector(state => state.meals.meals)
    const mealDetails = mealData.find(meal => meal.id === mealId);
    return (
        <ScrollView>
            <View>
                <Image source={{uri: mealDetails.imageUrl}} style={styles.image}/>
                <View style={styles.body}>
                    <Text>
                        {mealDetails.duration}m
                    </Text>
                    <Text style = {{textTransform: 'capitalize'}}>
                        {mealDetails.affordability}
                    </Text>
                    <Text style = {{textTransform: 'capitalize'}}>
                        {mealDetails.complexity}
                    </Text>
                </View>
                <Text style={styles.title}>List Of Ingredients</Text>
                <View style={styles.content}>
                {
                    mealDetails.ingredients.map((ing,index) => (
                        <Text key={index}>{ing}</Text>
                    ))
                }
                </View>
                <Text style={styles.title}>List Of Steps</Text>
                <View style={styles.content}>
                {
                    mealDetails.steps.map((step,index) => (
                    <Text key={index}>
                        <Text>{index+1}.</Text>
                        {step}
                    </Text>
                    ))
                }
                </View>
                <Text>{mealDetails.title}</Text>
            </View>
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favourite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log("Clicked");
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%'
    },
    body:{
        height:'7%',
        // paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginBottom: 10
    },
    content: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontFamily: 'lato-bold',
        textAlign: 'center'
    }
});

export default MealDetailsScreen;
