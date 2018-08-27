import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { Route1Stack,Route2Stack, Route3Stack, Route4Stack, Route5Stack } from './StackNavigators'
import STYLESTACK from './src/styles/style_stack'

import { createBottomTabNavigator } from 'react-navigation';


export default createBottomTabNavigator(
  {
    Route_1: Route1Stack,
    Route_2: Route2Stack,
    Route_3 : Route3Stack,
    Route_4 : Route4Stack,
    Route_5 : Route5Stack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        return<Image
                style={{width: 66, height: 58}}
                source={require('./assets/XXX.png')}
              />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel : true,
      style : {
        height : 60,
      }
    },
  }
);