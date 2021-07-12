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
  getWeatherForeCastForNextDays(lat, lon, cnt) {
    var url =
      'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
      lat +
      '&lon=' +
      lon +
      '&cnt=' +
      cnt +
      '&appid=' +
      api_key;
    return url;
  }

  getOpenweatherOneCallRequest(lat, lon) {
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

  //Gibt ein Object zurück, welches den Namen des Ortes/ der Orte zurückgibt, sowie ALLE dazugehörenden Wetterdaten
  //durch den Parameter cnt kann eine Anzahl an Städte im Umkreis bestimmt werden, zu welchen man Wetterdaten erhalten möchte
  getCityName(lat, lon) {
    var url =
      'https://api.openweathermap.org/data/2.5/find?lat=' +
      lat +
      '&lon=' +
      lon +
      '&cnt=' +
      1 +
      '&appid=' +
      api_key;
    return url;
  }

  getForeCastInformation = async () => {
    try {
      let geo = new Geo_Configuration();
      await geo.start();
      console.log(
        Time_formatter.getCurrentTime() +
          'Forecast:  ' +
          geo.getLongitude() +
          ' ' +
          geo.getLatitude(),
      );

      // var res = [];
      let res = await fetch(
        this.getOpenweatherOneCallRequest(
          geo.getLatitude(),
          geo.getLongitude(),
        ),
      );

      var resJson = await res.json();
      console.log('res: ' + JSON.stringify(resJson));

      console.log(Time_formatter.getCurrentTime() + ' json: ' + resJson);
      return resJson;
    } catch (e) {
      console.log(e);
    }
  };

  getWeatherInformation = async () => {
    try {
      let geo = new Geo_Configuration();
      await geo.start();
      //let response = await fetch(this.getURLByCityID(2809889));
      console.log(
        Time_formatter.getCurrentTime() +
          'Current Weather: ' +
          geo.getLongitude() +
          ' ' +
          geo.getLatitude(),
      );
      let response = await fetch(
        this.getURLByGeographicCoordinates(
          geo.getLatitude(),
          geo.getLongitude(),
        ),
      );
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
