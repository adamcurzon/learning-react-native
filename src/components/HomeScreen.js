import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import LoginLogoutButton from './LoginLogoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, StackActions} from '@react-navigation/native';


const HomeScreen = props => {
  const[user, setUser] = useState("");
  const navigation = useNavigation();

  async function getUserData(){
    let userData = await AsyncStorage.getItem('user');
    if(userData == null){
      navigation.dispatch(
        StackActions.replace('loginscreen', {})
      );
    }
    setUser(JSON.parse(userData));
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
    },
  });
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
    
      <Text>Home</Text>
      <Text>Firstname: {user.firstname}</Text>
      <Text>Lastname: {user.lastname}</Text>
      <Text>Login Date: {user.login_date}</Text>
      <Text>Access Token: {user.access_token}</Text>

      <LoginLogoutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
