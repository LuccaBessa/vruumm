import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Login, Signup } from './screens'

export const LoginNavigation = () => {
  const MainStack = createStackNavigator()

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={Signup} />
    </MainStack.Navigator>
  )
}
