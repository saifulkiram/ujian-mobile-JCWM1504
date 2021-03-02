
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'


import {createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk  from 'redux-thunk'
import allReducer from './src/reducers'

//import login screen
import LoginScreen from './src/screens/loginScreen'
import { View } from 'react-native';


const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)


const App = () =>{
  return (
    <Provider store={globalStore}>
      <View>
        <LoginScreen/>
      </View>
    </Provider>
  );
};


export default App;
