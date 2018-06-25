import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from './image-modal.component';
import { ImageGalleryModule } from '../image-gallery/image-gallery.module';

@NgModule({
    imports: [CommonModule, ImageGalleryModule],
    declarations: [ImageModalComponent],
    exports: [ImageModalComponent]
})
export class ImageModalModule {}
