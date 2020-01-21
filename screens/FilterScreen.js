import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import headerButton from "../components/HeaderButton";
import Colors from "../constant/Colors";

const SwitchContainer = ({ value, setValue, title }) => (
    <View style={styles.switchContainer}>
        <Text>{title}</Text>
        <Switch
            trackColor={{
                true: Colors.secondary
            }}
            thumbColor="#fff"
            value={value}
            onValueChange={value => setValue(value)}
        />
    </View>
);

const FilterScreen = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const switchHandler = useCallback(() => {
        return {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegeterian
        };
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

    useEffect(() => {
        props.navigation.setParams({save: switchHandler})
    },[switchHandler]);
    
    return (
        <View>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
            <SwitchContainer
                value={isGlutenFree}
                setValue={setIsGlutenFree}
                title="Glutten Free"
            />
            <SwitchContainer
                value={isLactoseFree}
                setValue={setIsLactoseFree}
                title="Lactose Free"
            />
            <SwitchContainer
                value={isVegan}
                setValue={setIsVegan}
                title="Vegan"
            />
            <SwitchContainer
                value={isVegeterian}
                setValue={setIsVegeterian}
                title="Vegeterian"
            />
        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={headerButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={() => {
                        const value = navData.navigation.getParam('save')
                        console.log(value());
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: "lato-bold",
        textAlign: "center",
        marginVertical: 30
    },
    switchContainer: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f9f9"
    }
});

export default FilterScreen;
