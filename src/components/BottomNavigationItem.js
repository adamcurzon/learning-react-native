import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomNavigationItem = props => {
  let activeTextColor = "#0077ee";
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    item: {
      width: 100,
      height: 80,
      backgroundColor: '#fff',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: '#000f1f',
    },
    activeText: {
      color: activeTextColor
    },
    icon: {
      fontSize: 100,
      color: '#000f1f',
    },
    activeIcon: {
      color: activeTextColor
    },
    iconView: {
      height: 40,
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 100,
    },
    activeItem: {
      width: 100,
      height: 80,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    }
  });

  let active = (props.activeScreen == props.screenName);

  return (
    <Pressable
      style={active ? styles.activeItem : styles.item}
      onPress={() => {
        // navigation.dispatch(StackActions.replace(props.screenName, {}));
        navigation.navigate(props.screenName)
      }}>
      <View style={styles.iconView}>
        <FontAwesomeIcon
          style={active ? styles.activeIcon : styles.icon}
          size={props.iconSize}
          icon={props.icon}
        />
      </View>
      <Text style={active ? styles.activeText : styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default BottomNavigationItem;
