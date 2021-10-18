import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/components/LoginScreen.js';
import HomeScreen from './src/components/HomeScreen.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  let initialRoute = "loginscreen";

  // Check if user is already logged in and set route to home page
  AsyncStorage.getItem('user').then(result => {
    var result_json = JSON.parse(result);
    if(result_json != null){
      initialRoute = "homescreen";
    }
  });

  return (
    <NavigationContainer onNavigationStateChange={null}>
      <Stack.Navigator
        initialRoute={initialRoute}
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="homescreen" component={HomeScreen} />
            <Stack.Screen name="loginscreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
