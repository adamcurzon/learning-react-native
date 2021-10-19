import React from 'react';
import {View, StyleSheet, Pressable, Text, Keyboard} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import BottomNavigationItem from './BottomNavigationItem';
import {faCoffee, faKey, faUser} from '@fortawesome/free-solid-svg-icons';

const BottomNavigation = props => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      backgroundColor: '#fff',
      display: 'flex',
      alignContent: 'space-around',
      flexWrap: 'wrap',
      bottom: 0,
      position: 'absolute',
    },
  });

  return (
    <View style={styles.container}>
      <BottomNavigationItem
        title="Home"
        icon={faCoffee}
        iconSize={32}
        screenName="homescreen"
        activeScreen={props.activeScreen}
      />
      <BottomNavigationItem
        title="Secret"
        icon={faKey}
        iconSize={26}
        screenName="secretscreen"
        activeScreen={props.activeScreen}
      />
      <BottomNavigationItem
        title="User"
        icon={faUser}
        iconSize={26}
        screenName="userscreen"
        activeScreen={props.activeScreen}
      />
    </View>
  );
};

export default BottomNavigation;
