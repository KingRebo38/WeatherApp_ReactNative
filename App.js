/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView, LayoutAnimation, Platform, UIManager
} from 'react-native';
import {Weather_ui_control} from './weather_controller/weather_ui_control';
import Menu from './ui_elements/Menu';
import Weatherobject from './ui_elements/Weatherobject';
import PocketView from './ui_elements/PocketView';
import Nextday from './ui_elements/Nextday';


export default class App extends Component {
  state = {
    textValue: 'Change me',
    temperature: 'filler',
    min_temperature: 'filler',
    max_temperature: 'filler',
    humidity: 'filler',
    cloud_visibility: 'filler',
    date_time_measurement: 'filler',
    wind_speed: 'filler',
    description: 'filler',
    weather_main_description: 'filler',
    name: 'filler',
    forecast: '',
    layout_state: <View/>
  };

  suchenButtonClicked = () => {
    const map =(
        <Button title={'Umut'} onPress={this.confirmButtoncklicked()}></Button>
    );
    this.setState({layout_state: map})
  }
  confirmButtoncklicked = () => {
    const exp =(
        <View>
          <PocketView city={this.state.name} temp={this.state.temperature + '°C'} time={this.state.date_time_measurement}/>
          <Weatherobject state={this.state} />
          <View>{this.state.nextDays}</View>
        </View>
    );
    this.setState({layout_state: exp})
  }

  buildNextDays = () => {
    var nextdays = [];
    var i = 0;
    this.state.forecast.daily.forEach(value => {
          nextdays.push(
              <Nextday key={'nextday-' + i++} day={value.getDay()} forecast={value}/>
          )
    }
        )
    this.setState({nextDays: nextdays});
  }
  constructor(props) {
    super(props);
    // this.openweatherAPI = new Openweather_api();
    this.controller = new Weather_ui_control(this);
    this.controller.getWeatherData().then(r => this.controller.updateWeather()).then(this.buildNextDays);
    if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
  }

  onPress = async () => {
    if (!this.controller.isDataAvailable()) {
      await this.controller.getWeatherData();
    }
    this.controller.updateWeather(this);
  };

  render() {
    return (
      <ScrollView style={styles.framework}>
        <Menu app={this}/>
        {/*{this.state.layout_state}*/}
        <PocketView city={this.state.name} temp={this.state.temperature + '°C'} desc={4} time={this.state.date_time_measurement}/>
        <Weatherobject state={this.state} />
        <View>{this.state.nextDays}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  framework: {
    flex: 1,
  },
  menu:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#BFEFFF'
  },

  searchbar:{
    height: 40,
    width: '80%',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
});
