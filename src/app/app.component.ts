import { Component } from '@angular/core';
import { CountdownType, CellType, Navbar, NavbarMenu, MenuPosition } from 'event-components';

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
                childs: [
                    {
                        label: 'Thema 2018'
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
                label: 'Organisatie'
            }
        ]
    };

    constructor() {
        // console.log(this.types);
    }
}
