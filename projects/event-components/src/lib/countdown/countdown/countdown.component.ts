import {
    Component,
    ChangeDetectionStrategy,
    Input,
    ElementRef,
    HostListener,
    OnChanges,
    AfterViewInit,
    ViewEncapsulation
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
        // if the outerhtml has a given height we try to fit all cirlces in the given height
        // if there's not a height given, or if it doesn't fit, we use the width
        const fullWidth = parseInt(window.getComputedStyle(this.element.nativeElement).width);
        const circleWidth = Math.floor(fullWidth / this.types.length);
        const height = parseInt(window.getComputedStyle(this.element.nativeElement).height);

        if (height > 0 && circleWidth >= height) {
            this.element.nativeElement.style.setProperty('--aspect-ratio', Math.floor(height));
        } else {
            this.element.nativeElement.style.setProperty('--aspect-ratio', Math.floor(fullWidth / this.types.length));
        }
    }
}
