import { MEALS } from "../../data/dummy-data"


const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'TOGGLE_FAVOURITE':
        const favMealsIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId)
        if(favMealsIndex >= 0){
            const updatedMeals = [...state.favouriteMeals];
            updatedMeals.splice(favMealsIndex,1)
            return { ...state, favouriteMeals: updatedMeals}
        }
        else{
            const meal = state.meals.find(meal => meal.id === action.mealId);
            return { ...state, favouriteMeals: state.favouriteMeals.concat(meal)}
        }

    default:
        return state
    }
}
