import {Time_formatter} from '../time_formatter/time_formatter';

export class Openweather_data_model {
  constructor(json) {
    this.json = json;
  }
  getCoord() {
    return this.json.coord;
  }
  getLon() {
    return this.getCoord().lon;
  }
  getLat() {
    return this.getCoord().lat;
  }
  getWeather() {
    return this.json.weather;
  }
  getWeatherMain() {
    return this.getWeather().main;
  }
  getWeatherDescription() {
    return this.getWeather().description;
  }
  getMain() {
    return this.json.main;
  }
  getMainTemp() {
    return Math.round((this.getMain().temp - 273.15) * 100) / 100;
  }
  getMainMin() {
    return Math.round((this.getMain().temp_min - 273.15) * 100) / 100;
  }
  getMainMax() {
    return Math.round((this.getMain().temp_max - 273.15) * 100) / 100;
  }
  getMainHumidity() {
    return this.getMain().humidity;
  }
  getWind() {
    return this.json.wind;
  }
  getWindSpeed() {
    return this.getWind().speed;
  }
  getCloudVisibility() {
    return this.json.clouds.all;
  }
  getDateTimeOfMeasurement() {
    let time = new Date(this.json.dt * 1000);
    return Time_formatter.getTimeOnly(time);
  }
  // Name
  getName() {
    return this.json.name;
  }
  toString() {
    return (
      '[' +
      this.getName() +
      ',' +
      this.getWeatherDescription() +
      ',' +
      this.getWeatherMain() +
      ',' +
      this.getMainTemp() +
      ']'
    );
  }
}
