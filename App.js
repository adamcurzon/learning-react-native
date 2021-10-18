/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/components/LoginScreen.js';
import HomeScreen from './src/components/HomeScreen.js';

const Stack = createNativeStackNavigator();

global.user = false;

const MyStack = () => {
  const[user, setUser] = useState("");

  // Check if user is already logged in
  AsyncStorage.getItem('user', (err, result) => {
    result = JSON.parse(result);
    global.user = result;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          {global.user ? (
            <Stack.Screen name="homescreen" component={HomeScreen} user={global.user} />
          ) : (
            <Stack.Screen name="loginscreen" component={LoginScreen} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
