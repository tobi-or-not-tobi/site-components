export interface Navbar {
    menu: NavbarMenu;
}

export interface NavbarMenu {
    mainItems: (RouterLinkItem | ExternalLinkItem)[];
    subItems?: (RouterLinkItem | ExternalLinkItem)[];
}

interface MenuItem {
    /* the label of the menu item */
    label: string;

    /* childs menu items */
    childs?: (RouterLinkItem | ExternalLinkItem)[];
}

export interface RouterLinkItem extends MenuItem {
    /* internal router links */
    routerLink?: string;
}

export interface ExternalLinkItem extends MenuItem {
    /* links to other applications  */
    href?: string;

    /* the target window that will be used to load the link */
    target?: string;
}
