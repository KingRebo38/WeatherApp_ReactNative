import {One_call_daily} from './one_call_daily';
import {One_call_alerts} from './one_call_alerts';

export class One_call_data {
  constructor(data) {
    this.daily = [];
    data.daily.forEach(value => {
      var d = new One_call_daily(value);
      // console.log(d.toString())
      this.daily.push(d);
      console.log(value);
    });
    this.alert = [];
    if (data.alerts != null){
      data.alerts.forEach(value => {
        this.alert.push(new One_call_alerts(value));
      });
    }

  }
  toString() {
    var s = '[\n';
    this.daily.forEach(value => (s += value.toString() + '\n'));
    s += ']';
    return s;
  }
}
