import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const Page3 = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.box1]}>
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={styles.box1_1}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwQKYI8vSk35zb1LB_Td8rn6ExBWWjIysgA&usqp=CAU',
          }}
          style={styles.box1_2}
        />
      </View>
      <View style={[styles.boxStyle, styles.box2]}>
        <Text style={styles.box2_1}>
          Canada is one of the best countries in the world to live in. First,
          Canada has an excellent health care system. All Canadians have access
          to medical services at a reasonable price.
        </Text>
        <View style={styles.box2_2}>
          <Button
            onPress={this._navigate}
            title="Go to layout 4"
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
    flex: 1,
    justifyContent: 'flex-end',
  },
  box2: {
    flex: 2,

    justifyContent: 'flex-end',
  },
  box1_1: {
    height: 40,

    backgroundColor: '#ededed',
    marginTop: 5,
    width: 40,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  box1_2: {
    flex: 0.5,
    backgroundColor: '#ededed',
    marginTop: 5,
    borderRadius: 10,
  },

  box2_1: {
    height: 80,

    backgroundColor: '#ededed',
    marginTop: 5,
    borderRadius: 10,
  },
  box2_2: {
    height: 40,

    backgroundColor: '#21a0a0',
    marginTop: 5,
    borderRadius: 10,
  },
});

export default Page3;
