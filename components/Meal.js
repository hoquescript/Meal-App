import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

const Meal = ({ title, image, duration, affordability, complexity, onClick }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress = {onClick}>
                <View style={styles.header}>
                    <ImageBackground source={{uri: image}} style={styles.bgImage}>
                        <Text style={styles.headline} numberOfLines={1}>{title}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.body}>
                    <Text>{duration}m</Text>
                    <Text style = {{textTransform: 'capitalize'}}>{affordability}</Text>
                    <Text style = {{textTransform: 'capitalize'}}>{complexity}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: "#e8e8e8"
    },
    item:{
        height: 200,
    },
    header:{
        height: '85%',
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    headline: {
        fontSize: 20,
        fontFamily: 'lato',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#fff',
        padding: 8
    },
    body:{
        height:'15%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }

});


export default Meal;
