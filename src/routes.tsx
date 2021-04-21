import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, SignUp, Home, Rents, Profile } from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTokenContext } from './context/token';
import { BottomTapNavigator } from './components/BottomTapNavigator';
import { SplashScreen } from './components/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export function Routes() {
  const { tokenState, setToken } = useTokenContext()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    await AsyncStorage.getItem("token", (err, result) => {
      if (!err) {
        setToken(result ? result : "");
        setLoading(false)
      } else {
        console.log(err);
      }
    });
  };

  const handleScreen = () => {
    if (loading) {
      return <SplashScreen />
    } else {
      if (!tokenState?.token || tokenState?.token == "") {
        return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        );
      } else {
        return (
          <Tab.Navigator tabBar={(props: any) => <BottomTapNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Rents" component={Rents} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        );
      }
    }
  }

  return (
    <NavigationContainer>
      {handleScreen()}
    </NavigationContainer>
  );
}
