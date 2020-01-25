import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealNavigator from './navigation/MealNavigator'
import mealsReducer from './store/reducers/mealsReducer';

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

const fetchFont = () => (
  Font.loadAsync({
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-light': require('./assets/fonts/Lato-Light.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
  })
)

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)}/>
    )
  }
  return (
    <Provider store={store}>
      <MealNavigator/>
    </Provider>
  )
}

export default App;