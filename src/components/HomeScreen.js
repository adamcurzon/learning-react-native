import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import LoginLogoutButton from './LoginLogoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
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
    },
  });
  console.log(props);
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
    
      <Text>Home</Text>
      <Text>Firstname: {props.user.firstname}</Text>
      <Text>Lastname: {props.user.lastname}</Text>
      <Text>Login Date: {props.user.login_date}</Text>

      <LoginLogoutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
