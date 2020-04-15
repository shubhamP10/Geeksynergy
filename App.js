import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import signup from './App/Containers/signup';
import home from './App/Containers/home';
import show from './App/Containers/show';
import info from './App/Containers/info';
import { Dimensions } from 'react-native';
const AppNavigator = createStackNavigator(
  {
    Home : home,
    SignUp : signup,
    Show : show,
    Info : info,
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions : {
    headerStyle : {
    backgroundColor : "#002157",
    height : Dimensions.get("window").height * 0.06,
      },
      headerTintColor : '#fff',
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <AppContainer/>
    );
  }
}