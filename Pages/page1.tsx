import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const Page1 = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={[styles.boxStyle, styles.box1]}></Image>

      <View style={[styles.boxStyle, styles.box2]}>
        <View style={styles.box2_1}></View>
      </View>

      <View style={[styles.boxStyle, styles.box3]}>
        <View style={styles.box3_1}>
          <Button onPress={this._navigate} title="Click" color="#FFFFFF" />
        </View>
        <View style={styles.box3_2}>
          <Button
            onPress={this._navigate}
            title="Go to layout 2"
            color="#FFFFFF"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  boxStyle: {
    padding: 10,
  },
  box1: {
    backgroundColor: '#ededed',
    justifyContent: 'flex-end',
    flex: 2,
  },

  box2: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  box2_1: {
    height: 40,
    backgroundColor: '#e53d00',
    marginTop: 5,
    borderRadius: 10,
  },

  box3: {
    flex: 2,
    paddingBottom: 50,
    justifyContent: 'flex-end',
  },

  box3_1: {
    height: 40,
    backgroundColor: '#21a0a0',
    marginTop: 5,
    borderRadius: 10,
  },
  box3_2: {
    height: 40,
    backgroundColor: '#21a0a0',
    marginTop: 5,
    borderRadius: 10,
  },
});

export default Page1;
