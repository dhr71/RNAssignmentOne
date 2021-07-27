import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const Page2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyles, styles.box1]}>
        <Image
          source={{
            uri: 'https://www.gannett-cdn.com/presto/2021/01/07/USAT/0d87949b-7f95-4318-a7f7-72f2b6893d05-marvel-shows.png',
          }}
          style={styles.defaultContainer}
        />
      </View>
      <View style={[styles.boxStyles, styles.box2]}>
        <Image
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-watch-all-the-marvel-movies-in-order-thor-ragnarok-1568309518.jpg?crop=0.423xw:1.00xh;0.119xw,0&resize=640:*',
          }}
          style={styles.defaultContainer}
        />
      </View>
      <View style={[styles.boxStyles, styles.box3]}>
        <View style={styles.defaultContainer}>
          <Button
            onPress={() => navigation.navigate('Page3')}
            title="Go to layout 3"
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

  boxStyles: {
    width: '100%',
    height: 50,
    padding: 20,
  },

  box1: {
    flex: 1,
  },
  box2: {
    flex: 3,
  },
  box3: {
    flex: 0.4,
  },

  defaultContainer: {
    backgroundColor: '#21a0a0',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Page2;
