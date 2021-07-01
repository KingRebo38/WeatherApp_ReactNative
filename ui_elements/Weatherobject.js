import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Weatherobject = props => {

  return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.lefttext}>{'min: ' + props.state.min_temperature + '°C'}</Text>
            <Text style={styles.middletext}>{'max: ' + props.state.max_temperature + '°C'}</Text>
            <Text style={styles.righttext}>{'hum: '+props.state.humidity+'%'}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.cloudtext}>{'wol: '+ props.state.cloud_visibility +'%'}</Text>
            <Text style={styles.windtext}>{'Wind: '+ props.state.wind_speed+'m/s'}</Text>
        </View>
        <View style={styles.uhrzeit}>
            <Text style={styles.middletext}>{ props.state.date_time_measurement + ' Uhr'}</Text>
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
  righttext: {
      alignSelf: 'flex-end',
      marginRight: 20,
      fontSize: 18,
  },
  lefttext: {
      alignSelf: 'flex-start',
      marginLeft : 20,
      fontSize: 18,
  },
  middletext: {
      alignSelf: 'center',
      fontSize: 18,
  },
  windtext: {
      alignSelf: 'flex-start',
      marginRight : 60,
      fontSize: 18,
  },
  cloudtext: {
      alignSelf: 'flex-end',
      marginLeft: 60,
      fontSize: 18,
  },
  uhrzeit: {
      marginTop: 12,
      alignSelf: 'center',
  }
});
export default Weatherobject;
