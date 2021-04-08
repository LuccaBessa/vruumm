import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, Main } from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTokenContext } from './Context/token';

const Stack = createStackNavigator();

export function Routes() {
  const { tokenState, setToken } = useTokenContext()

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    await AsyncStorage.getItem("token", (err, result) => {
      if (!err) {
        setToken(result ? result : "");
      } else {
        console.log(err);
      }
    });
  };

  const handleScreen = () => {
    if (!tokenState?.token || tokenState?.token == "") {
      return (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      );
    } else {
      return (
        <>
          <Stack.Screen name="Main" component={Main} />
        </>
      );
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {handleScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
