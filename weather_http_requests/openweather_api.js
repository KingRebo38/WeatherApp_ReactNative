import {Time_formatter} from '../time_formatter/time_formatter';
import Geo_Configuration from "../config_geolocation/Geo_Configuration";

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
    //Gibt ein Object zurück, welches den Namen des Ortes/ der Orte zurückgibt, sowie ALLE dazugehörenden Wetterdaten
    //durch den Parameter cnt kann eine Anzahl an Städte im Umkreis bestimmt werden, zu welchen man Wetterdaten erhalten möchte
    getCityName(lat,lon){
        var url=
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

    getWeatherInformation = async () => {
        try {
            let geo = new Geo_Configuration();
            await geo.start();
            //let response = await fetch(this.getURLByCityID(2809889));
            console.log(Time_formatter.getCurrentTime() + ' ' + geo.getLongitude() + ' ' + geo.getLatitude())
            let response = await fetch(this.getURLByGeographicCoordinates(geo.getLatitude(), geo.getLongitude()));
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
