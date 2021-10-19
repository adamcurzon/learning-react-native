import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, StackActions} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import styles from '../css/styles';

const SecretScreen = props => {
  const navigation = useNavigation();

  // Store user data in state
  const [user, setUser] = useState('');

  // Get the user data in persistent storage
  async function getUserData() {
    // Get the data
    let userData = await AsyncStorage.getItem('user');
    // Check if user is valid
    if (userData == null) {
      // Navigate to the login screen if user invalid
      navigation.dispatch(StackActions.replace('loginscreen', {}));
    }
    // Add user data to the state
    setUser(JSON.parse(userData));
  }
  getUserData();

  const [secretText, setSecretText] = useState('');
  useEffect(() => {
    fetch('https://adamcurzon.co.uk/training-app', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        class: 'user',
        method: 'secret',
        params: '',
      },
    })
      .then(response => response.json())
      .then(json => {
        setSecretText(json.message);
      });
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />

      {secretText ? <Text>{secretText}</Text> : <ActivityIndicator />}

      <Pressable
        onPress={() => {
          navigation.navigate('homescreen');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>

      <BottomNavigation activeScreen="secretscreen" />
    </SafeAreaView>
  );
};

export default SecretScreen;
