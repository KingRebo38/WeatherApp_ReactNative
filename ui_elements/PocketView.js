import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {Component} from 'react';

export default class PocketView extends Component{


  constructor(city, temp, desc, time) {
    super();
    // this.props = props;
      this.icon= 'sun',
      this.color= '#2E64FE',
          this.city= city,
        this.temp= temp,
        this.desc= desc,
        this.time= time,

    console.log()
    this.updateWeatherIcon()
  }
componentDidMount() {
    this.updateWeatherIcon()
}

  updateWeatherIcon(){
    if (this.desc < 300){
      this.icon = "cloud-lightning"
    }
    else if (300 <= this.desc && this.desc < 500 ){
      this.icon = "cloud-drizzle"
    }
    else if (500 <= this.desc && this.desc < 600 ){
      this.icon = "cloud-rain"
    }
    else if (600 <= this.desc && this.desc< 700 ){
      this.icon = "cloud-snow"
    }
    else if (this.desc == 800 ){
      this.icon = "sun"
      this.color="#F0DA0B"
    }
    else if (this.desc >= 801 ){
      this.icon = "cloud"
    }
    console.log(this.desc + ' equals weatherstatus: '+ this.icon + this.color)

    // this.setState({weatherIcon: (<Icon name={this.state.icon} size={100} color={this.state.color} />)})
  }

render(){
    var icon = new Icon();
    icon.s

  return (
      <View>
        <View style={styles.header}>
          <View style={styles.cityview}></View>
          <View style={styles.cityview}>
            <Text style={styles.citytext}>{this.city}</Text>
          </View>
          <View stxle={styles.timeview}>
            <Text style={styles.timetext}>{this.time+'Uhr'}</Text>
          </View>
        </View>
        <View style={styles.container}>
          {/*{this.state.weatherIcon}*/}
          <Icon name={this.icon} size={100} color={this.color} />
          <Text style={styles.citytext}>{this.temp}</Text>
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
