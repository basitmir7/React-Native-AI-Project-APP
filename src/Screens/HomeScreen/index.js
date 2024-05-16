import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../store/themeReducer/index';
import styles from './styles';

const HomeScreen = () => {
  const theme = useSelector((state) => state.theme.value)
  const [toggleTheme,setToggleTheme] = useState(false)
  const dispatch = useDispatch();

  const themeHandler = () =>{
    setToggleTheme(!toggleTheme)
    dispatch(setTheme(toggleTheme))
  }
  return (
    <View style={styles.container(theme)}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.button}  onPress={themeHandler}>
        <Text style={styles.btnText}>Toggle Theme</Text>
      </TouchableOpacity>
      <Text>{theme}</Text>
      <ScrollView></ScrollView>
    </View>
  );
};
export default HomeScreen;
