import {Time_formatter} from '../time_formatter/time_formatter';

export class One_call_daily {
  constructor(json) {
    this.json = json;
  }
  getDay() {
    let time = new Date(this.json.dt * 1000);
    return time.toDateString().split(' ')[0];
  }
  getTempDay() {
    return Math.round((this.json.temp.day - 273.15) * 100) / 100;
  }
  getTempMin() {
    return Math.round((this.json.temp.min - 273.15) * 100) / 100;;
  }
  getTempMax() {
    return Math.round((this.json.temp.max - 273.15) * 100) / 100;
  }
  getSunrise() {
    var date = new Date(this.json.sunrise * 1000);
    return Time_formatter.getTimeOnly(date);
  }
  getSunset() {
    var date = new Date(this.json.sunset * 1000);
    return Time_formatter.getTimeOnly(date);
  }
  toString(){
    var s ='{\n';
    s += ''+this.getDay()+',';
    s += ''+this.getTempDay()+',';
    s += ''+this.getTempMin()+',';
    s += ''+this.getTempMax()+',';
    s += ''+this.getSunrise()+',';
    s += ''+this.getSunset()+'';
    s += '}';
    return s;
  }
}
