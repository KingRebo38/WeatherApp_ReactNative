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
    const h = date.getHours();
    let m = date.getMinutes();

    if (m < 10) {
      m = '0' + date.getMinutes();
    }
    var s = h + ':' + m;

    return s;
  }
}
