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
    return this.json.sunrise;
  }
  getSunset() {
    return this.json.sunset;
  }
  toString(){
    var s ='{\n';
    s += '\t'+this.getDay()+'\n';
    s += '\t'+this.getTempDay()+'\n';
    s += '\t'+this.getTempMin()+'\n';
    s += '\t'+this.getTempMax()+'\n';
    s += '\t'+this.getSunrise()+'\n';
    s += '\t'+this.getSunset()+'\n';
    s += '}';
    return s;
  }
}
