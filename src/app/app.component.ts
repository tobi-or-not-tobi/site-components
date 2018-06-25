import { Component } from '@angular/core';
import { CountdownType } from 'event-components';
import { Gallery, Image } from 'projects/event-components/src/lib/image-gallery/image.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    startDate = new Date(2018, 8, 27, 10);
    types = CountdownType;

    activeImage: Image;

    mainItems = [
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
    ];
    subItems = [
        {
            label: 'Sub item',
            href: 'https://www.sub-item.com',
            target: '_blank'
        }
    ];

    gallery: Gallery = {
        images: [
            {
                label: 'test',
                thumb:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_150,h_120,g_faces/https://farm5.staticflickr.com/4440/36769282162_e223ab4d6c_o.jpg',
                medium:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_500,h_375,g_faces/https://farm5.staticflickr.com/4440/36769282162_e223ab4d6c_o.jpg',
                large:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_1000,g_faces/https://farm5.staticflickr.com/4440/36769282162_e223ab4d6c_o.jpg'
            },
            {
                label: 'test',
                thumb:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_150,h_120,g_faces/https://farm5.staticflickr.com/4362/36769306212_461d52b81d_o.jpg',
                medium:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_500,h_375,g_faces/https://farm5.staticflickr.com/4362/36769306212_461d52b81d_o.jpg',
                large:
                    '//res.cloudinary.com/kfw/image/fetch/c_fill,w_1000,g_faces/https://farm5.staticflickr.com/4362/36769306212_461d52b81d_o.jpg'
            }
        ]
    };

    constructor() {
        // console.log(this.types);
    }

    openImage(event: Image) {
        this.activeImage = { ...event };
    }
}
