export class Time_formatter {
  static getCurrentTime() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    return dateTime;
  }
  static getTimeOnly(date: Date) {
    return date.getHours() + ':' + date.getMinutes() ;
  }
}
