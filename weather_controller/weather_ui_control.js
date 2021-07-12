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
  }

  getWeatherData = async () => {
    var result = await this.openweatherAPI.getWeatherInformation();
    var foreinfo = await this.openweatherAPI.getForeCastInformation();
    let currentWeather = new Openweather_data_model(result);
    let foreCast = new One_call_data(foreinfo);
    console.log(foreCast.toString());
    console.log(
      Time_formatter.getCurrentTime() + ' Weather: ' + currentWeather.getMainTemp(),
    );
    this.currentWeather = currentWeather;
    this.forecast = foreCast;
  };

  updateWeather = () => {
    this.app.setState({temperature: this.currentWeather.getMainTemp()});
    this.app.setState({min_temperature: this.currentWeather.getMainMin()});
    this.app.setState({max_temperature: this.currentWeather.getMainMax()});
    this.app.setState({humidity: this.currentWeather.getMainHumidity()});
    this.app.setState({cloud_visibility: this.currentWeather.getCloudVisibility()});
    this.app.setState({date_time_measurement: this.currentWeather.getDateTimeOfMeasurement()});
    this.app.setState({wind_speed: this.currentWeather.getWindSpeed()});
    this.app.setState({description: this.currentWeather.getWeatherDescription()});
    this.app.setState({weather_main_description: this.currentWeather.getWeatherMain()});
    this.app.setState({name: this.currentWeather.getName()});
    this.app.setState({currentWeatherData: this.currentWeather});
    console.log('update ' + this.currentWeather.toString());
    console.log(this.app.state);
  }
  isDataAvailable = () => {
      if (this.currentWeather ===null){
      return false;
      }
    return true;
  }
}
