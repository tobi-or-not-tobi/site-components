import {
    Component,
    Input,
    OnInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnDestroy
} from '@angular/core';
import { TimerService } from '../timer.service';
import { CountdownType } from 'event-components';
import { Subscription } from 'rxjs';

@Component({
    selector: 'lib-countdown-circle',
    templateUrl: './countdown-circle.component.html',
    styleUrls: ['./countdown-circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownCircleComponent implements AfterViewInit, OnDestroy {
    @Input() type: CountdownType;
    @Input() startDate: Date;

    subscription: Subscription;
    timeleft;
    label;
    dashArray;
    offset;
    private max;

    constructor(private timer: TimerService, private cd: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.init();

        this.subscription = this.getTimeSubscription().subscribe(time => {
            const offset = ((Math.PI * 100) / this.max) * time + '%';
            if (offset !== this.offset) {
                this.timeleft = time;
                this.label = this.getLabel(time);
                this.offset = offset;
                this.cd.markForCheck();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private getTimeSubscription() {
        switch (this.type) {
            case CountdownType.SECS:
                return this.timer.secs;
            case CountdownType.MINS:
                return this.timer.mins;
            case CountdownType.HOURS:
                return this.timer.hours;
            case CountdownType.DAYS:
                return this.timer.days;
            case CountdownType.MONTHS:
                return this.timer.months;
        }
    }

    private init() {
        switch (this.type) {
            case CountdownType.SECS:
                this.max = 60;
                break;
            case CountdownType.MINS:
                this.max = 60;
                break;
            case CountdownType.HOURS:
                this.max = 24;
                break;
            case CountdownType.DAYS:
                this.max = 365;
                break;
            case CountdownType.MONTHS:
                this.max = 12;
                break;
        }
    }

    getLabel(timeleft) {
        switch (this.type) {
            case CountdownType.SECS:
                return timeleft !== 1 ? 'seconden' : 'seconde';
            case CountdownType.MINS:
                return timeleft !== 1 ? 'minuten' : 'minuut';
            case CountdownType.HOURS:
                return timeleft !== 1 ? 'uren' : 'uur';
            case CountdownType.DAYS:
                return timeleft !== 1 ? 'dagen' : 'dag';
            case CountdownType.MONTHS:
                return timeleft !== 1 ? 'maanden' : 'maand';
        }
    }
}
