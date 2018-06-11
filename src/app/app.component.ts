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
                label: 'News',
                routerLink: '/news',
                childs: [
                    {
                        label: 'Thema 2018',
                        href: 'https://www.google.com',
                        target: '_self'
                    },
                    {
                        label: 'Programma'
                    },
                    {
                        label: 'Inschrijven'
                    }
                ]
            },
            {
                label: 'Media',
                childs: [
                    {
                        label: 'Video'
                    },
                    {
                        label: `Foto's`
                    },
                    {
                        label: 'Video'
                    }
                ]
            }
        ],
        subItems: [
            {
                label: 'Organisatie',
                href: 'https://www.google.com'
            }
        ]
    };

    constructor() {
        // console.log(this.types);
    }
}
