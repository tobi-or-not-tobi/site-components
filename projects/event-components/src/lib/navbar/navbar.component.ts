import { Component, Input } from '@angular/core';
import { NavbarMenu } from './navbar.model';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Input() fixed: boolean = true;
    @Input() navbarMenu: NavbarMenu;

    open: boolean = false;

    openMobileNav() {
        this.open = !this.open;
    }
}
