import {Time_formatter} from '../time_formatter/time_formatter';

const api_key = 'b59ec8ed4fabf7ce3e7a5070a3d2dd3d';

export class Openweather_api {
  constructor() {}

  getURLByCityID(id) {
    var url =
      'https://api.openweathermap.org/data/2.5/weather?id=' +
      id +
      '&appid=' +
      api_key;
    return url;
  }
  getURLByGeographicCoordinates(lat, lon) {
    var url =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      lon +
      '&appid=' +
      api_key;
    return url;
  }

  getWeatherInformation = async () => {
    try {
      let response = await fetch(this.getURLByCityID(2172797));
      var responseText = await response.text();
      console.log(
        Time_formatter.getCurrentTime() + ' response: ' + responseText,
      );
      // let json = await response.json();
      var j = JSON.parse(responseText);
      console.log(Time_formatter.getCurrentTime() + ' json: ' + j);

      return j;
    } catch (error) {
      console.log(error);
    }
  };
}
