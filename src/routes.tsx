import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, SignUp, Home, Rents, Profile, EditProfile } from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTokenContext } from './context/token';
import { BottomTapNavigator } from './components/BottomTapNavigator';
import { SplashScreen } from './components/SplashScreen';


export function Routes() {
  const MainStack = createStackNavigator()
  const ProfileStack = createStackNavigator()
  const BottomTab = createBottomTabNavigator()
  const { tokenState, setToken } = useTokenContext()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    await AsyncStorage.getItem("token", (err: any, result: any) => {
      if (!err) {
        setToken(result ? result : "");
        setLoading(false)
      } else {
        console.log(err);
      }
    });
  };

  const ProfileRoute = () => {
    return (
      <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      </ProfileStack.Navigator>
    );
  }

  const handleScreen = () => {
    if (loading) {
      return <SplashScreen />
    } else {
      if (!tokenState?.token || tokenState?.token == "") {
        return (
          <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="SignUp" component={SignUp} />
          </MainStack.Navigator>
        );
      } else {
        return (
          <BottomTab.Navigator tabBar={(props: any) => <BottomTapNavigator {...props} />}>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Rents" component={Rents} />
            <BottomTab.Screen name="ProfileRoute" component={ProfileRoute} />
          </BottomTab.Navigator>
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

