import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

const Page6 = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <View style = {[styles.boxStyles, styles.box1]}>
                <View style={styles.defaultContainer}>
                     
                </View>
             </View> */}
      <View style={[styles.boxStyles, styles.box1]}>
        <Image
          style={styles.Container1}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjhH9JE8PzTw1bAo66ZaAa9JVbj8gCfB2QA&usqp=CAUnpx',
          }}
        />
      </View>
      <View style={styles.Container2}>
        <View style={[styles.boxStyles2, styles.box2]}>
          <Image
            style={[styles.boxStyles2, styles.box2_1]}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          <Image
            style={[styles.boxStyles2, styles.box2_1]}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          <Image
            style={[styles.boxStyles2, styles.box2_1]}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          <Image
            style={[styles.boxStyles2, styles.box2_1]}
            source={{
              uri: 'data:image/png;base64,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',
            }}
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
    padding: 10,
  },
  boxStyles2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box1: {
    flex: 3,
  },
  box2: {
    flex: 0.6,
    justifyContent: 'space-around',
  },
  box2_1: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  Container1: {
    backgroundColor: '#ededed',
    flex: 1,
    borderRadius: 10,
  },

  Container2: {
    backgroundColor: '#ededed',
    flex: 0.5,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
});

export default Page6;