import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const MealType = ({ title, color, onPress }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color }}>
            <TouchableOpacity                
                style={styles.touchBtn}
                onPress={onPress}
            >
                <View style={styles.body}>
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        elevation: 5
    },
    touchBtn: {
        height: 150,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    body: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }    
});

export default MealType;
