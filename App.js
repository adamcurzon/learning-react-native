import * as React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/components/SplashScreen.js';
import LoginScreen from './src/components/LoginScreen.js';
import HomeScreen from './src/components/HomeScreen.js';
import SecretScreen from './src/components/SecretScreen.js';
import UserScreen from './src/components/UserScreen.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer onNavigationStateChange={null}>
      <Stack.Navigator
        initialRoute="splashscreen"
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="splashscreen" component={SplashScreen} />
            <Stack.Screen name="homescreen" component={HomeScreen} />
            <Stack.Screen name="loginscreen" component={LoginScreen} />
            <Stack.Screen name="secretscreen" component={SecretScreen} />
            <Stack.Screen name="userscreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
