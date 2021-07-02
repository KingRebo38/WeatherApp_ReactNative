import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {Component} from 'react';
const PocketView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.citytext}>{props.city}</Text>
      <Icon name="sun" size={100} color="#F0DA0B" />
      <Text style={styles.citytext}>{props.temp}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  weatherImage: {
    width: 175,
    height: 175,
  },
  citytext: {
    fontSize: 30,
  },
});
export default PocketView;
