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
import BottomNavigator from './src/Navigation/BottomNavigator/index';
import {HomeScreen} from './src/Screens/index';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <View style={styles.container}>
            <BottomNavigator />
          </View>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
