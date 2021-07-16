import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export class Weatherobject extends Component {
  constructor(min_temp, max_temp, humidity, cloud_vis, wind_speed) {
    super();
    this.min_temp = min_temp;
    this.max_temp = max_temp;
    this.humidity = humidity;
    this.cloud_vis = cloud_vis;
    this.wind_speed = wind_speed;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.lefttext}>{'min: ' + this.min_temp + '°C'}</Text>
          <Text style={styles.middletext}>
            {'max: ' + this.max_temp + '°C'}
          </Text>
          <View style={styles.humidity}>
            <FontistoIcon name="fog" size={25} color="#8EE7F4" />
            <Text style={styles.righttext}>{this.humidity + '%'}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            <Icon name="cloud" size={25} color="#CDCDCD" style={styles.cloud} />
            <Text style={styles.cloudtext}>{this.cloud_vis + '%'}</Text>
          </View>
          <View style={styles.container}>
            <Icon name="wind" size={30} color="#8EE7F4" />
            <Text style={styles.windtext}>{this.wind_speed + 'm/s'}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

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
