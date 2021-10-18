import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import LoginEmailInput from './LoginEmailInput.js';
import LoginPasswordInput from './LoginPasswordInput';
import LoginButton from './LoginButton';

global.loginData = {email: '', password: ''};

const LoginScreen = props => {
  const password_ref = useRef();

  const [errorMsg, setErrorMsg] = useState(false);
    console.log("login");
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
    errorMessage: {
      color: 'red',
      padding: 10,
      paddingTop: 30,
    },
  });

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-square.png')}
      />
      <Text style={styles.errorMessage}>{errorMsg}</Text>
      <Text style={styles.inputLabel}>EMAIL</Text>
      <LoginEmailInput
        onSubmitEditing={() => {
          password_ref.current.focus();
        }}></LoginEmailInput>

      <Text style={styles.inputLabel}>PASSWORD</Text>
      <LoginPasswordInput
        value="123"
        password_ref={password_ref}></LoginPasswordInput>

      <LoginButton errorMsgHandler={setErrorMsg} password_ref={password_ref} />
    </SafeAreaView>
  );
};

export default LoginScreen;
