import { Component, Input, HostListener, OnChanges } from '@angular/core';
import { ImageModalConfig } from './image-modal-config.model';
import { Image, Gallery } from '../image-gallery/image.model';

const DEFAULT_CONFIG: ImageModalConfig = {
    useCloseButton: true,
    hideOnBackdrop: true,
    hideOnEscape: true,
    loop: true
};

@Component({
    selector: 'lib-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
    isActive: boolean = false;
    _image: Image;
    _gallery: Gallery;
    _config: ImageModalConfig = {};

    @Input()
    set active(imageModal: Image) {
        if (imageModal) {
            this._image = imageModal;
            this.open();
        }
    }

    @Input()
    set gallery(gallery: Gallery) {
        this._gallery = gallery;
    }

    @Input()
    set config(config: ImageModalConfig) {
        this._config = { ...DEFAULT_CONFIG, ...config };
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        if (this._config.hideOnEscape && event.keyCode === 27) {
            this.close();
        }
        if (event.keyCode === 39 || event.keyCode === 40) {
            this.next();
        }
        if (event.keyCode === 37 || event.keyCode === 38) {
            this.previous();
        }
    }

    open() {
        this.isActive = true;
    }

    close(event?: MouseEvent) {
        if (event) {
            event.stopPropagation();
            if (event.srcElement.classList.contains('modal-background') && this._config.hideOnBackdrop === false) {
                return;
            }
        }

        this._image = null;
        this.isActive = false;
    }

    selectThumb(image: Image) {
        this._image = image;
    }

    private next() {
        const activeImage = this._gallery.images.find(image => image.large === this._image.large);
        const activeImageIndex = this._gallery.images.indexOf(activeImage);
        if (activeImageIndex + 1 < this._gallery.images.length) {
            this.active = this._gallery.images[activeImageIndex + 1];
        } else if (this._config.loop) {
            this.active = this._gallery.images[0];
        }
    }
    private previous() {
        const activeImage = this._gallery.images.find(image => image.large === this._image.large);
        const activeImageIndex = this._gallery.images.indexOf(activeImage);
        if (activeImageIndex > 0) {
            this.active = this._gallery.images[activeImageIndex - 1];
        } else if (this._config.loop) {
            this.active = this._gallery.images[this._gallery.images.length - 1];
        }
    }
}
