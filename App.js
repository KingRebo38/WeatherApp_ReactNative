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
  ScrollView,
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


  render() {
    return (
      <ScrollView style={styles.framework}>
        <Menu />
        <PocketView
          city={this.state.name}
          temp={this.state.temperature + '°C'}
        />
        <Weatherobject state={this.state} />
        <Nextday day={'Mo'} state={this.state} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  framework: {
    flex: 1,
  },
});
