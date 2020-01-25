import { MEALS } from "../../data/dummy-data"


const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'Default':
        return { ...state, ...payload }

    default:
        return state
    }
}
