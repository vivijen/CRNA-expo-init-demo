
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Routes } from './src/common/router';

const AppNavigator = createStackNavigator(
  Routes,
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#243B5A',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
