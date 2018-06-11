import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[backdrop]'
})
export class BackdropDirective implements AfterViewInit {
    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        const el = <HTMLElement>this.el.nativeElement;
        this.addBackdrop(el);
    }

    private addBackdrop(element: HTMLElement) {
        const bdElement = document.createElement('div');
        bdElement.classList.add('backdrop');
        if (element.childNodes.length > 0) {
            element.insertBefore(bdElement, element.childNodes[0]);
        } else {
            element.appendChild(bdElement);
        }
    }
}
