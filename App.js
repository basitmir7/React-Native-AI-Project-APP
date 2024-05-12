/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomeScreen } from './src/Screens/index';


const App =()=>{
  return <SafeAreaView style={styles.container}>
    <StatusBar/>
    <View style={styles.container}>
      <Text>
        Welcome to React Native
      </Text>
      <HomeScreen/>
    </View>
  </SafeAreaView>
}

export const styles = StyleSheet.create({
container :{
flex:1,

}
});

export default App;
