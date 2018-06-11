import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[scrollProperty]'
})
export class ScrollPropertyDirective implements AfterViewInit {
    top = 0;
    @HostListener('window:scroll')
    scroll() {
        this.calcScroll();
    }
    constructor(private elRef: ElementRef) {
        this.top = this.elRef.nativeElement.getBoundingClientRect().top;
    }
    ngAfterViewInit() {
        this.calcScroll();
    }

    calcScroll() {
        const scrollPos =
            (window.scrollY - this.top) / parseInt(window.getComputedStyle(this.elRef.nativeElement).height);
        this.elRef.nativeElement.style.setProperty('--scroll', Math.round(scrollPos * 100) + '');
    }
}
