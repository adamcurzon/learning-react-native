import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, Image, Pressable} from 'react-native';
import LoginLogoutButton from './LoginLogoutButton';
import BottomNavigation from './BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, StackActions} from '@react-navigation/native';
import styles from '../css/styles'

const HomeScreen = props => {
  const navigation = useNavigation();

  // Store user data in state
  const[user, setUser] = useState("");

  // Get the user data in persistent storage
  async function getUserData(){
    // Get the data
    let userData = await AsyncStorage.getItem('user');
    // Check if user is valid
    if(userData == null){
      // Navigate to the login screen if user invalid
      navigation.dispatch(
        StackActions.replace('loginscreen', {})
      );
    }
    // Add user data to the state
    setUser(JSON.parse(userData));
  }
  getUserData();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
    

      <BottomNavigation activeScreen="homescreen" />
    </SafeAreaView>
  );
};

export default HomeScreen;
