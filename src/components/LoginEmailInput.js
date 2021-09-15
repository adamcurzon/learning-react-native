import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const LoginEmailInput = props => {
  const [outline, setOutline] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  global.loginData['email'] = value;

  const styles = StyleSheet.create({
    input: {
      width: 300,
      height: 62,
      margin: 12,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#D1D5DB',
      padding: 20,
      color: '#3A4454',
    },
    inputFocus: {
      width: 300,
      height: 62,
      margin: 12,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#0077ee',
      padding: 10,
      paddingLeft: 20,
      color: '#0077ee',
    },
    inputError: {
      width: 300,
      height: 62,
      margin: 12,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'red',
      padding: 10,
      paddingLeft: 20,
      color: 'red',
    },
  });

  function getStyle() {
    if (!error) {
      if (!outline) {
        return styles.input;
      } else {
        return styles.inputFocus;
      }
    } else {
      return styles.inputError;
    }
  }

  return (
    <View>
      <TextInput
        onFocus={() => {
          setOutline(true);
        }}
        onBlur={() => {
          setOutline(false);
        }}
        returnKeyType={'next'}
        onChangeText={value => {
          setValue(value);
          if (value.length <= 0) {
            setError(false);
          } else if (value.length < 6) {
            setError(true);
          } else {
            setError(false);
          }
        }}
        value={value}
        onSubmitEditing={props.onSubmitEditing}
        autoCompleteType="off"
        style={getStyle()}></TextInput>
    </View>
  );
};

export default LoginEmailInput;
