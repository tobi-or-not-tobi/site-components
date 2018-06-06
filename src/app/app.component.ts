import { Component } from '@angular/core';
import { CountdownType, CellType } from 'event-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    startDate = new Date(2018, 8, 27, 10);
    types = CountdownType;
    constructor() {
        // console.log(this.types);
    }
}
