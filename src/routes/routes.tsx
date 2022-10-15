import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, EditProfile } from '../screens';
import { useAuth } from '../hooks';
import { BottomTapNavigator, SplashScreen } from '../components';
import { LoginNavigation } from '../features/Login/LoginNavigation';
import { HomeNavigation } from '../features/Home/HomeNavigation';
import { Rents } from '../features/Rents/screens';

export function Routes() {

  const ProfileStack = createStackNavigator()
  const BottomTab = createBottomTabNavigator()
  const { token } = useAuth()

  const ProfileRoute = () => {
    return (
      <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile} /> */}
      </ProfileStack.Navigator>
    );
  }

  const handleScreen = () => {
    if (!token || token == "") {
      return <LoginNavigation />
    } else {
      return (
        <BottomTab.Navigator tabBar={(props: any) => <BottomTapNavigator {...props} />}>
          <BottomTab.Screen name="HomeRoute" component={HomeNavigation} />
          <BottomTab.Screen name="Rents" component={Rents} />
          {/* <BottomTab.Screen name="ProfileRoute" component={ProfileRoute} /> */}
        </BottomTab.Navigator>
      );
    }
  }

  return (
    <NavigationContainer>
      {handleScreen()}
    </NavigationContainer>
  );
}

