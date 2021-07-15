import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {Component} from 'react';
const PocketView = props => {
  /*let icon;
  if (props.desc == "cloudy"){
    icon = "cloud"
  }
  else if (props.desc == "sunny"){
    icon = "sun"
  }
*/

  return (
      <View>
        <View style={styles.header}>
          <View style={styles.cityview}></View>
          <View style={styles.cityview}>
            <Text style={styles.citytext}>{props.city}</Text>
          </View>
          <View stxle={styles.timeview}>
            <Text style={styles.timetext}>{props.time+'Uhr'}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Icon name="sun" size={100} color="#F0DA0B" />
          <Text style={styles.citytext}>{props.temp}</Text>
        </View>
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
  header:{
    flexDirection: 'row',
  },
  cityview:{
    width:'33%',
    alignItems: 'center',
  },
  timetext:{
    marginLeft: 40,
    fontSize: 20,
    marginTop: 5,
  },
  timeview: {
    width: '33%',
    alignItems: 'flex-end',
  }

});
export default PocketView;
