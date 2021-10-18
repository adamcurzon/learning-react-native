import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet, Pressable, Text, Keyboard} from 'react-native';
import { useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isPropertyAssignment } from 'typescript';


const LoginButton = props => {
  const [press, setPress] = useState(false);
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    pressableClick: {
      width: 300,
      height: 60,
      backgroundColor: '#D1D5DB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    pressableTextClick: {
      color: '#3A4454',
      fontWeight: '700',
    },
    pressable: {
      backgroundColor: '#0077ee',
      width: 300,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    pressableText: {
      color: '#fff',
      fontWeight: '700',
    },
  });

  function onPress() {
    if (!press) {
      setPress(true);
      Keyboard.dismiss();

      fetch('https://adamcurzon.co.uk/training-app', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          class: 'user',
          method: 'login',
          params: JSON.stringify(global.loginData),
        },
      })
        .then(response => response.json())
        .then(json => {
          if(!json.error){
            // Clear the login input data
            global.loginData = {};
            // Parse the user data as json
            json.user = JSON.parse(json.user);
            // Add the user data to persistent storage
            AsyncStorage.setItem("user", JSON.stringify(json.user));
            // Change the page to home screen
            navigation.dispatch(
              StackActions.replace('homescreen', {})
            );
          } else {
            props.errorMsgHandler(json.message);
            setTimeout(() => {
              setPress(false);
            }, 200);
          }
        })
        .catch(error => {
          console.log('Api call error');
          alert(error.message);
          throw error;
        });
    }
  }

  return (
    <Pressable
      onPress={onPress}
      style={press ? styles.pressableClick : styles.pressable}>
      <Text style={press ? styles.pressableTextClick : styles.pressableText}>
        LOGIN
      </Text>
    </Pressable>
  );
};

export default LoginButton;
