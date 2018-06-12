import { Directive, Input, AfterViewInit, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[heroImage]',
    host: {
        class: 'hero-image2'
    }
})
export class HeroImageDirective implements AfterViewInit {
    @Input() heroImage: string;
    @Input() heroImageHeight: string;

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        const el = <HTMLElement>this.el.nativeElement;
        this.addBackground(el, this.heroImage);
    }

    private addBackground(element: HTMLElement, url: string) {
        if (this.heroImageHeight) {
            element.style.height = this.heroImageHeight;
        }
        element.style.backgroundImage = 'url(' + url + ')';
        element.style.backgroundAttachment = 'fixed';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundSize = '100%';

        let top = element.getBoundingClientRect().top;
        // in case we're not at the top of the page we need to subtract the scroll position
        top -= document.body.getBoundingClientRect().top;
        element.style.backgroundPositionY = top + 'px';
    }
}
