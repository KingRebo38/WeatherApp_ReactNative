import {Openweather_data_model} from '../weather_http_requests/openweather_data_model';
import {Openweather_api} from '../weather_http_requests/openweather_api';
import {Time_formatter} from '../time_formatter/time_formatter';
import {One_call_data} from '../weather_http_requests/one_call_data';

export class Weather_ui_control {
  constructor(app) {
    this.currentWeather = null;
    this.forecast = null;
    this.openweatherAPI = new Openweather_api();
    this.app = app;
    this.currentWeather = null;
    this.foreCast = null;
  }

  getWeatherData = async (name: string) => {
    if(name === undefined || name === null || name.length === 0){
      var currentWeatherJSON = await this.openweatherAPI.getWeather(this.openweatherAPI.getCurrentWeather);
      this.currentWeather = new Openweather_data_model(currentWeatherJSON);
      var forecastJSON = await this.openweatherAPI.getWeather(this.openweatherAPI.getForeCast);
      this.foreCast = new One_call_data(forecastJSON);

    }else {
      var currentWeatherJSON = await this.openweatherAPI.getWeather(Openweather_api.getWeatherByCityName(name));
      console.log(JSON.stringify(currentWeatherJSON))
      if(currentWeatherJSON.cod ==404){
        // console(currentWeatherJSON.cod)
        return null;
      }
      console.log(currentWeatherJSON.cod)
      this.currentWeather = new Openweather_data_model(currentWeatherJSON);
      var forecastJSON = await this.openweatherAPI.getWeather(Openweather_api.getForeCastURLbyGEO(this.currentWeather.getLat(), this.currentWeather.getLon()));
      this.foreCast = new One_call_data(forecastJSON);

    }
    console.log(this.foreCast.toString());
    console.log(
      Time_formatter.getCurrentTime() + ' Weather: ' + this.currentWeather.getMainTemp(),
    );
    // this.currentWeather = currentWeather;
    // this.forecast = foreCast;
  };

  updateWeather = () => {

    this.app.setState({
      weatherID: this.currentWeather.getWeatherID(),
      temperature: this.currentWeather.getMainTemp(),
      min_temperature: this.currentWeather.getMainMin(),
      max_temperature: this.currentWeather.getMainMax(),
      humidity: this.currentWeather.getMainHumidity(),
      cloud_visibility: this.currentWeather.getCloudVisibility(),
      date_time_measurement: this.currentWeather.getDateTimeOfMeasurement(),
      wind_speed: this.currentWeather.getWindSpeed(),
      description: this.currentWeather.getWeatherDescription(),
      weather_main_description: this.currentWeather.getWeatherMain(),
      name: this.currentWeather.getName(),
      currentWeatherData: this.currentWeather,
      forecast: this.foreCast,
    })



    console.log("UPDATE FORECAST" + this.app.state.forecast.toString())
    console.log('update ' + this.currentWeather.toString());
    console.log('update ' + this.currentWeather.getWeatherID());
    console.log(this.app.state);
  }
  isDataAvailable = () => {
      if (this.currentWeather ===null){
      return false;
      }
    return true;
  }
}
