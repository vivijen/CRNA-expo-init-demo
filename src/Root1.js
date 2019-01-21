/**
 * Weiwy
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './pages/Home/Home';
import BusinessDist from './pages/BusinessDist/BusinessDist';
import Login from './pages/Login/Login';
import Beighbours from './pages/Neighbours/Neighbours';
import PersonCenter from './pages/PersonCenter/PersonCenter';
import SignIn from './pages/SignIn/SignIn';

const TabNavigator = createBottomTabNavigator (
  {
    Home: Home,
    BusinessDist: BusinessDist,
    SignIn: SignIn,
    Beighbours: Beighbours,
    PersonCenter: PersonCenter,
    Login: Login,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        console.log("navigation");
        console.log(navigation);
        const {routeName} = navigation.state;
        console.log("routeName");
        console.log(routeName);
        let icon;
        switch(routeName){
          case 'Home': icon = require('./img/img1.png'); break;
          case 'BusinessDist': icon = require('./img/img2.png'); break;
          case 'SignIn': icon = require('./img/img3.png'); break;
          case 'Beighbours': icon = require('./img/img4.png'); break;
          case 'PersonCenter': icon = require('./img/img5.png'); break;
          case 'Login': icon = require('./img/img5.png'); break;
        }
        return (
          <Image source={icon} style={{width: 40, height: 40}}/>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer (TabNavigator);
