/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Openweather_api} from './weather_http_requests/openweather_api.js';
import {Time_formatter} from './time_formatter/time_formatter';
import {Openweather_data_model} from './weather_http_requests/openweather_data_model';
import {Weather_ui_control} from './weather_controller/weather_ui_control';
import Menu from './ui_elements/Menu';
import Weatherobject from './ui_elements/Weatherobject';
import PocketView from './ui_elements/PocketView';

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
    name: '',
  };

  constructor(props) {
    super(props);
    // this.openweatherAPI = new Openweather_api();
    this.controller = new Weather_ui_control(this);
    this.controller.getWeatherData().then(r => this.controller.updateWeather());


  }
  onPress = async () => {
    if (!this.controller.isDataAvailable()) {
      await this.controller.getWeatherData();
    }
    this.controller.updateWeather(this);
  };

  // showText = text => {
  //   this.setState({textValue: text});
  //
  //   console.log(this.state.textValue);
  // };

  render() {
    return (
      <View style={styles.framework}>
        <Menu />
        <PocketView
          city={this.state.name}
          temp={this.state.temperature}></PocketView>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/*<Weatherobject text={'Umut ist ne Schneeflocke'} />*/}
        <Weatherobject text={this.state.name} />
        <Weatherobject text={this.state.temperature} />
        <Weatherobject text={this.state.min_temperature} />
        <Weatherobject text={this.state.max_temperature} />
        <Weatherobject text={this.state.humidity} />
        <Weatherobject text={this.state.cloud_visibility} />
        <Weatherobject text={this.state.date_time_measurement} />
        <Weatherobject text={this.state.wind_speed} />
        <Weatherobject text={this.state.description} />
        <Weatherobject text={this.state.weather_main_description} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  framework: {
    flex: 1,
  },
});
