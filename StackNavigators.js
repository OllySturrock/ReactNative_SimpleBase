import React from 'react'
import { createStackNavigator } from 'react-navigation'

import R1p1 from './src/pages/route1_page1'
import R1p2 from './src/pages/route1_page2'
//
//
import R2p1 from './src/pages/route2_page1'
//
import R3p1 from './src/pages/route3_page1'
//
import R4p1 from './src/pages/route4_page1'
//
import R5p1 from './src/pages/route5_page1'

//---------------------------------------------

export const Route1Stack = createStackNavigator(
  {
    route1_page1: { screen: R1p1 },
    route1_page2: { screen: R1p2 }
  },
  {
    initialRouteName: 'route1_page1'
  }
)

export const Route2Stack = createStackNavigator(
  {
    route2_page1: { screen: R2p1 }
  },
  {
    initialRouteName: 'route2_page1'
  }
)

export const Route3Stack = createStackNavigator(
  {
    route3_page1: { screen: R3p1 }
  },
  {
    initialRouteName: 'route3_page1'
  }
)

export const Route4Stack = createStackNavigator(
  {
    route4_page1: { screen: R4p1 }
  },
  {
    initialRouteName: 'route4_page1'
  }
)
export const Route5Stack = createStackNavigator(
  {
    route5_page1: { screen: R5p1 }
  },
  {
    initialRouteName: 'route5_page1'
  }
)