import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';
import Page4 from './Pages/page4';
import Page5 from './Pages/page5';
import Page6 from './Pages/page6';

export default function App() {
  return (
    <View style={styles.container}>
      <Page4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
