import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPropertyDirective } from './scroll-property.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [ScrollPropertyDirective],
    exports: [ScrollPropertyDirective]
})
export class ScrollModule {}
