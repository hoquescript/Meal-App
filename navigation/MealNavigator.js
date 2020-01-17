import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native'

import Colors from '../constant/Colors'

import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
// import FavouriteScreen from '../screens/FavouriteScreen';
// import FilterScreen from '../screens/FilterScreen';
// import MealDetailsScreen from '../screens/MealDetailsScreen';

const navigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Category'
        }
    },
    CategoriesMeal: CategoriesMealScreen,
},
{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
}
)


export default createAppContainer(navigator);