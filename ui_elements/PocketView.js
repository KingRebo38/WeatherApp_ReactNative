import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {Component} from 'react';

export default class PocketView extends Component{
  constructor(props) {
    super();
    this.props = props;
    this.icon = "sun";
    this.color = '#2E64FE';
    if (props.desc < 300){
      this.icon = "cloud-lightning"
    }
    else if (300 <= props.desc && props.desc < 500 ){
      this.icon = "cloud-drizzle"
    }
    else if (500 <= props.desc && props.desc < 600 ){
      this.icon = "cloud-rain"
    }
    else if (600 <= props.desc && props.desc< 700 ){
      this.icon = "cloud-snow"
    }
    else if (props.desc == 800 ){
      this.icon = "sun"
      this.color="#F0DA0B"
    }
    else if (props.desc >= 801 ){
      this.icon = "cloud"
    }
    console.log(props.desc + ' equals weatherstatus: '+ this.icon + this.color)
  }

render(){
  return (
      <View>
        <View style={styles.header}>
          <View style={styles.cityview}></View>
          <View style={styles.cityview}>
            <Text style={styles.citytext}>{this.props.city}</Text>
          </View>
          <View stxle={styles.timeview}>
            <Text style={styles.timetext}>{this.props.time+'Uhr'}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Icon name={this.icon} size={100} color={this.color} />
          <Text style={styles.citytext}>{this.props.temp}</Text>
        </View>
      </View>
  );
}

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
