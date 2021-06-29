import {Openweather_data_model} from '../weather_http_requests/openweather_data_model';
import {Openweather_api} from '../weather_http_requests/openweather_api';
import {Time_formatter} from '../time_formatter/time_formatter';

export class Weather_ui_control {
  constructor(app) {
    this.data = null;
    this.openweatherAPI = new Openweather_api();
    this.app = app;
  }

  getWeatherData = async () => {
    var result = await this.openweatherAPI.getWeatherInformation();
    const data = new Openweather_data_model(result);
    console.log(
      Time_formatter.getCurrentTime() + ' Weather: ' + data.getMainTemp(),
    );
    this.data = data;
  };

  updateWeather = () => {
    this.app.setState({temperature: this.data.getMainTemp()});
    this.app.setState({min_temperature: this.data.getMainMin()});
    this.app.setState({max_temperature: this.data.getMainMax()});
    this.app.setState({humidity: this.data.getMainHumidity()});
    this.app.setState({cloud_visibility: this.data.getCloudVisibility()});
    this.app.setState({date_time_measurement: this.data.getDateTimeOfMeasurement()});
    this.app.setState({wind_speed: this.data.getWindSpeed()});
    this.app.setState({description: this.data.getWeatherDescription()});
    this.app.setState({weather_main_description: this.data.getWeatherMain()});
    this.app.setState({name: this.data.getName()});
    console.log('update ' + this.data.toString());
    console.log(this.app.state);
  }
  isDataAvailable = () => {
      if (this.data ===null){
      return false;
      }
    return true;
  }
}
