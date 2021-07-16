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
    weatherID: 800,
    forecast: '',
    layout_state: <View/>,

  };

  buildNextDays = () => {
    var nextdays = [];
    var i = 0;

    this.state.forecast.daily.forEach(value => {
      nextdays.push(<Nextday key={i++} forecast={value}/>)
    }
        )
    this.setState({nextDays: nextdays});
  }
  constructor(props) {
    super(props);
    this.props = props;
    this.controller = new Weather_ui_control(this);
    this.updateWeatherAndUI()
  }
  updateWeatherAndUI(name: string){
    this.controller.getWeatherData(name).then(r => this.controller.updateWeather()).then(this.buildNextDays);

  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    // console.log('prev: ' + prevState.weatherID + ', current: '+ JSON.stringify(this.state))
    if(prevState.weatherID !== this.state.weatherID || prevState.name !== this.state.name || prevState.date_time_measurement !== this.state.date_time_measurement){

      console.log('prev: ' + prevState.weatherID + ', current: '+ JSON.stringify(this.state))
      this.pocketView = new PocketView(this.state.name, this.state.temperature + '°C',this.state.weatherID, this.state.date_time_measurement).render();
      this.setState({pocketView: this.pocketView})
      this.weatherobject = new Weatherobject(this.state.min_temperature, this.state.max_temperature, this.state.humidity, this.state.cloud_visibility, this.state.wind_speed).render();
      this.buildNextDays()

    }
  }

  render() {
    this.menu = new Menu(this).render();

    return (
      <ScrollView style={styles.framework}>
        {this.menu}
        {this.state.pocketView}
        {this.weatherobject}
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
