import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownCircleComponent } from './countdown-circle/countdown-circle.component';
import { TimerService } from './timer.service';
@NgModule({
    imports: [CommonModule],
    declarations: [CountdownComponent, CountdownCircleComponent],
    providers: [TimerService],
    exports: [CountdownComponent, CountdownCircleComponent]
})
export class CountDownModule {}
