import {
    Component,
    ChangeDetectionStrategy,
    Input,
    ElementRef,
    HostListener,
    OnChanges,
    AfterViewInit
} from '@angular/core';
import { TimerService } from '../timer.service';
import { CountDownModule } from 'event-components';
import { CountdownType } from '../countdown.model';

@Component({
    selector: 'lib-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements AfterViewInit, OnChanges {
    @Input() startDate: Date;
    @Input() types: CountdownType[];

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.calcWidth();
    }

    constructor(private element: ElementRef, private timer: TimerService) {}
    ngAfterViewInit() {
        this.calcWidth();
    }
    ngOnChanges() {
        this.timer.initTimer(this.startDate);
    }

    private calcWidth() {
        const fullWidth = parseInt(window.getComputedStyle(this.element.nativeElement).width);
        this.element.nativeElement.style.setProperty('--aspect-ratio', Math.floor(fullWidth / this.types.length));
    }
}
