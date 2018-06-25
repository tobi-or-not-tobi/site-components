import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Gallery, Image } from './image.model';

@Component({
    selector: 'lib-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
    @Input() gallery: Gallery;
    @Input() start: number = 0;
    @Input() max: number = 100;
    @Input() selected: Image;

    @Output() select = new EventEmitter<Image>();

    selectThumb(image: Image, event: MouseEvent) {
        if (event) {
            event.stopPropagation();
        }
        this.selected = image;
        this.select.emit(image);
    }
}
