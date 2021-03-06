import {Time_formatter} from '../time_formatter/time_formatter';
import Geo_Configuration from '../config_geolocation/Geo_Configuration';

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
  static getCurrentWeatherURLbyGEO(lat, lon) {
    var url =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      lon +
      '&appid=' +
      api_key;
    return url;
  };

  static getForeCastURLbyGEO(lat, lon) {
    var url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      lat +
      '&lon=' +
      lon +
      '&exclude=' +
      'minutely,hourly,current' +
      '&unit=metric' +
      '&appid=' +
      api_key;
    return url;
  }
  //
  // //Gibt ein Object zurück, welches den Namen des Ortes/ der Orte zurückgibt, sowie ALLE dazugehörenden Wetterdaten
  // //durch den Parameter cnt kann eine Anzahl an Städte im Umkreis bestimmt werden, zu welchen man Wetterdaten erhalten möchte
  // getCityName(lat, lon) {
  //   var url =
  //     'https://api.openweathermap.org/data/2.5/find?lat=' +
  //     lat +
  //     '&lon=' +
  //     lon +
  //     '&cnt=' +
  //     1 +
  //     '&appid=' +
  //     api_key;
  //   return url;
  // }

  static getWeatherByCityName(name: string){
    var url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      name +
      '&appid=' +
      api_key;
    return url;

  }

  async getCurrentWeather() {
    try {
      let geo = new Geo_Configuration();
      await geo.start();

      console.log(
        Time_formatter.getCurrentTime() +
          'Current Weather: ' +
          geo.getLongitude() +
          ' ' +
          geo.getLatitude(),
      );
      let url = Openweather_api.getCurrentWeatherURLbyGEO(geo.getLatitude(), geo.getLongitude())
      return url;
    } catch (e) {
      console.log(e);
    }
  }
  async getForeCast() {
    try {
      let geo = new Geo_Configuration();
      await geo.start();

      console.log(
        Time_formatter.getCurrentTime() +
          'Forecast Weather: ' +
          geo.getLongitude() +
          ' ' +
          geo.getLatitude(),
      );
      var url = Openweather_api.getForeCastURLbyGEO(geo.getLatitude(), geo.getLongitude())
      return url;
    } catch (e) {
      console.log(e);
    }
  }


  getWeather = async method => {
    try {
      let request;
      console.log('Method is starting');
      if(typeof method === 'function'){
        request = await method();
      }else {
        request = method;
      }

      let response = await fetch(request);
      var responseText = await response.json();
      console.log(
        Time_formatter.getCurrentTime() +
          ' response: ' +
          JSON.stringify(responseText),
      );

      return responseText;
    } catch (error) {
      console.log(error);
    }
  };
}
