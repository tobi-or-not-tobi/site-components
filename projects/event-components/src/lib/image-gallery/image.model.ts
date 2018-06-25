export interface Gallery {
    label?: string;
    images: Image[];
}

export interface Image {
    label?: string;
    thumb?: string;
    medium?: string;
    large?: string;
}
