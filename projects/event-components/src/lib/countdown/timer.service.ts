import { Injectable } from '@angular/core';
import * as moment_ from 'moment';
import { BehaviorSubject } from 'rxjs';

const moment = moment_;
const DATETIME_FORMAT = 'DD-MM-YYYY HH:mm:ss';
const INTERVAL_IN_MS = 1000;

@Injectable()
export class TimerService {
    startTime: number;

    secs: BehaviorSubject<any> = new BehaviorSubject<any>({});
    mins: BehaviorSubject<any> = new BehaviorSubject<any>({});
    hours: BehaviorSubject<any> = new BehaviorSubject<any>({});
    days: BehaviorSubject<any> = new BehaviorSubject<any>({});
    months: BehaviorSubject<any> = new BehaviorSubject<any>({});

    constructor() {}

    initTimer(startDate: Date) {
        this.startTime = moment(startDate, DATETIME_FORMAT).unix();
        this.setNewTime();
    }

    private setNewTime() {
        const timeLeft = this.startTime - this.getCurrentTime();
        const momentLeft = moment.duration(timeLeft * 1000, 'milliseconds');
        const durationLeft = moment.duration(momentLeft.asMilliseconds() - INTERVAL_IN_MS, 'milliseconds');

        this.months.next(moment.duration(durationLeft).months());
        this.days.next(moment.duration(durationLeft).days());
        this.days.next(Math.round(moment.duration(durationLeft.asDays(), 'days').asDays() - 0.5));
        this.hours.next(moment.duration(durationLeft).hours());
        this.mins.next(moment.duration(durationLeft).minutes());
        this.secs.next(moment.duration(durationLeft).seconds());

        setTimeout(() => {
            this.setNewTime();
        }, 1000);
    }

    // helper method to mmanipulate current time during testing
    private getCurrentTime(): number {
        return moment().unix();
    }
}
