import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';
import Weatherobject from './Weatherobject';
const PocketView = props => {
  return (
    <View style={styles.container}>
      <Text>{props.city}</Text>
      <Image style={styles.weatherImage} source={require('./Unbenannt.png')} />
      <Text>{'T: ' + props.temp}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  weatherImage: {
    width: 74,
    height: 69,
  },
});
export default PocketView;
