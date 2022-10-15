import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home } from './screens'
import { RequestRent } from './screens/RequestRent'

export const HomeNavigation = () => {
  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="RequestRent" component={RequestRent} />
    </HomeStack.Navigator>
  )
}
