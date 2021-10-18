import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, Image, Pressable} from 'react-native';
import LoginLogoutButton from './LoginLogoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, StackActions} from '@react-navigation/native';


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
    secretButton: {
      backgroundColor: '#2ECC71',
      width: 300,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 20,
    },
    secretButtonText: {
      color: '#fff',
      fontWeight: '700',
    },
  });
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
    
      <Text>Home{'\n'}</Text>
      <Text>Firstname: {user.firstname}{'\n'}</Text>
      <Text>Lastname: {user.lastname}{'\n'}</Text>
      <Text>Login Date: {user.login_date}{'\n'}</Text>

      <LoginLogoutButton />

      <Pressable
        onPress={() => {navigation.navigate('secretscreen')}}
        style={styles.secretButton}>
        <Text style={styles.secretButtonText}>
          Secret Screen
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
