import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/login-screen';
import SignupScreen from '../Screens/signup-screen';
import AccountScreen from '../Screens/account-screen';
import {MainTabNavigator} from '../BottomTabNavigation/bottom-tabs'

const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={AccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="tab" component={MainTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
