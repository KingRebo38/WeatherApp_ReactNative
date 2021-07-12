import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const Weatherobject = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.lefttext}>
          {'min: ' + props.state.min_temperature + '°C'}
        </Text>
        <Text style={styles.middletext}>
          {'max: ' + props.state.max_temperature + '°C'}
        </Text>
        <View style={styles.humidity}>
          <FontistoIcon name="fog" size={25} color="#8EE7F4" />
          <Text style={styles.righttext}>{props.state.humidity + '%'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Icon name="cloud" size={25} color="#CDCDCD" style={styles.cloud} />
          <Text style={styles.cloudtext}>
            {props.state.cloud_visibility + '%'}
          </Text>
        </View>
        <View style={styles.container}>
          <Icon name="wind" size={30} color="#8EE7F4" />
          <Text style={styles.windtext}>{props.state.wind_speed + 'm/s'}</Text>
        </View>
      </View>
      <View style={styles.uhrzeit}>
        <Text style={styles.middletext}>
          {props.state.date_time_measurement + ' Uhr'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  humidity: {
    flexDirection: 'row',
  },
  righttext: {
    marginRight: 20,
    marginLeft: 5,
    fontSize: 18,
  },
  lefttext: {
    marginLeft: 20,
    fontSize: 18,
  },
  middletext: {
    fontSize: 18,
  },
  windtext: {
    marginRight: 55,
    marginLeft: 5,
    fontSize: 18,
  },
  cloudtext: {
    marginLeft: 5,
    fontSize: 18,
  },
  uhrzeit: {
    marginTop: 12,
    alignSelf: 'center',
  },
  cloud: {
    marginLeft: 55,
  },
});
export default Weatherobject;
