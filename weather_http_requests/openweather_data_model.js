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
    return this.getMain().temp;
  }
  getMainMin() {
    return this.getMain().temp_min;
  }
  getMainMax() {
    return this.getMain().temp_max;
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
    return this.json.dt;
  }
  // Name
  getName(){
    return this.json.name;
  }
  toString(){
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
