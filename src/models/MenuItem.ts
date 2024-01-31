export type MenuItem = {
    name: string;
    img: string;
    children: MenuItemChild[];
}

type MenuItemChild = {
    name: string;
    categories: string[];
}