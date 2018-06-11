import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageDirective } from './hero-image.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [HeroImageDirective],
    exports: [HeroImageDirective]
})
export class HeroImageModule {}
