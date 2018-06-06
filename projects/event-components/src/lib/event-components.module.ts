import { NgModule } from '@angular/core';
import { EventComponentsComponent } from './event-components.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [EventComponentsComponent],
    exports: [EventComponentsComponent]
})
export class EventComponentsModule {}
