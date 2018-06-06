import { Component, ChangeDetectionStrategy, Input, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { CountDownModule } from 'event-components';
import { CountdownType } from '../countdown.model';
import { Observable, fromEvent } from 'rxjs';

import { debounceTime, map } from 'rxjs/operators';
@Component({
    selector: 'lib-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements AfterViewInit, OnChanges {
    @Input() startDate: Date;
    @Input() types: CountdownType[];

    hostHeight: number;

    constructor(private element: ElementRef, private timer: TimerService) {
        fromEvent(window, 'resize')
            .pipe(debounceTime(50))
            .subscribe(() => this.calcWidth());
    }

    ngAfterViewInit() {
        this.hostHeight = parseInt(window.getComputedStyle(this.element.nativeElement).height);
        this.calcWidth();
    }

    ngOnChanges() {
        this.timer.initTimer(this.startDate);
    }

    private calcWidth() {
        // if the outerhtml has a given height we try to fit all cirlces in the given height
        // if there's not a height given, or if it doesn't fit, we use the width
        const fullWidth = parseInt(window.getComputedStyle(this.element.nativeElement).width);
        const circleWidth = Math.floor(fullWidth / this.types.length);

        if (this.hostHeight > 0 && circleWidth >= this.hostHeight) {
            this.element.nativeElement.style.setProperty('--aspect-ratio', Math.floor(this.hostHeight));
        } else {
            this.element.nativeElement.style.setProperty('--aspect-ratio', circleWidth);
        }
    }
}
