export interface Navbar {
    menu: NavbarMenu;
}

export interface NavbarMenu {
    mainItems: MenuItem[];
    subItems?: MenuItem[];
}

export interface MenuItem {
    label: string;
    childs?: MenuItem[];
}
