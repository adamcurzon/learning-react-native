/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

import LoginEmailInput from './src/components/LoginEmailInput.js';
import LoginPasswordInput from './src/components/LoginPasswordInput.js';
import LoginButton from './src/components/LoginButton.js';

global.loginData = {email: '', password: ''};

const App: () => Node = () => {
  const password_ref = useRef();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('./src/assets/logo-square.png')}
      />

      <Text style={styles.inputLabel}>EMAIL</Text>
      <LoginEmailInput
        onSubmitEditing={() => {
          password_ref.current.focus();
        }}></LoginEmailInput>

      <Text style={styles.inputLabel}>PASSWORD</Text>
      <LoginPasswordInput password_ref={password_ref}></LoginPasswordInput>

      <LoginButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F3F4F6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    width: 300,
    color: '#3A4454',
    fontWeight: '700',
  },
  button: {
    display: 'flex',
    width: 300,
    height: 60,
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
