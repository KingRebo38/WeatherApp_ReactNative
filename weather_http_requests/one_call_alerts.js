import {Time_formatter} from '../time_formatter/time_formatter';

export class One_call_alerts {
    constructor(alert) {
        this.alert = alert;
    }
    getSenderName(){
        return this.alert.sender_name;
    }
    getEvent(){
        return this.alert.event;
    }
    getStart(){
        let time = new Date(this.alert.start * 1000);
        return Time_formatter.getTimeOnly(time);
    }
    getEnd(){
        let time = new Date(this.alert.end * 1000);
        return Time_formatter.getTimeOnly(time);
    }
    getDescription(){
        return this.alert.description;
    }
}
