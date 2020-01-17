import React from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = (props) => {
    const dataRender = (itemData) => (
        <TouchableOpacity 
            style={style.container} 
            onPress={() => props.navigation.navigate({
                routeName: 'CategoriesMeal',
                params: {
                    categoryID: itemData.item.id
                }
            }
        )}>
            <View>
               <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={dataRender} numColumns={2}/>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    }
})


export default CategoriesScreen
