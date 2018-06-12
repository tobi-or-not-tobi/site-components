import { Component } from '@angular/core';
import { CountdownType, NavbarMenu } from 'event-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    startDate = new Date(2018, 8, 27, 10);
    types = CountdownType;

    navbarMenu: NavbarMenu = {
        mainItems: [
            {
                label: 'Main Item 1',
                routerLink: '/main-item-1',
                childs: [
                    {
                        label: 'child 1',
                        description: `A description for sub 1, A description for sub 1`,
                        routerLink: 'link'
                    }
                ]
            }
        ],
        subItems: [
            {
                label: 'Sub item',
                href: 'https://www.sub-item.com',
                target: '_blank'
            }
        ]
    };

    constructor() {
        // console.log(this.types);
    }
}
