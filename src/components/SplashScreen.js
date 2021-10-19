import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Image, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, StackActions} from '@react-navigation/native';


const SplashScreen = props => {
  const navigation = useNavigation();

  // Store user data in state
  const[user, setUser] = useState("");

  // Get the user data in persistent storage
  async function getUserData(){
    // Get the data
    let userData = await AsyncStorage.getItem('user');
    
    // Wait 2 seconds before redirecting
    setTimeout(function(){
      if(userData == null){
        // Navigate to the login screen if user invalid
        navigation.dispatch(
          StackActions.replace('loginscreen', {})
        );
      } else {
        // Navigate to the home screen if user valid
        navigation.dispatch(
          StackActions.replace('homescreen', {})
        ); 
      }
    }, 1);
  }
  getUserData();

  const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: '#F3F4F6',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 30,
    },
  });
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
      <ActivityIndicator />
    </SafeAreaView>
  );
};

export default SplashScreen;
