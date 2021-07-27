import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const Page5 = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.box1]}>
        <View style={styles.box1_2}></View>
        <View style={styles.box1_3}></View>
        <View style={styles.box1_4}></View>
        <View style={styles.box1_5}></View>
      </View>
      <View style={[styles.boxStyle, styles.box2]}>
        <View style={styles.box2_1}>
          <Button
            onPress={this._navigate}
            title="Go to layout 6"
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
    justifyContent: 'space-evenly',

    padding: 20,
    paddingTop: 100,
  },
  box1: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  box2: {
    flex: 2,
    justifyContent: 'flex-end',
  },

  box1_2: {
    flex: 0.4,
    backgroundColor: '#e53d00',
    marginTop: 5,
    borderRadius: 10,
  },
  box1_3: {
    flex: 0.4,
    backgroundColor: '#ffe900',
    marginTop: 5,
    borderRadius: 10,
  },
  box1_4: {
    flex: 0.4,
    backgroundColor: '#21A0A0',
    marginTop: 5,
    borderRadius: 10,
  },
  box1_5: {
    flex: 0.4,
    backgroundColor: '#046865',
    marginTop: 5,
    borderRadius: 10,
  },

  box2_1: {
    height: 80,
    // flex:1,
    backgroundColor: '#000',
    marginTop: 5,
    width: 80,
    alignItems: 'flex-start',
    left: 275,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Page5;
