export interface SellerInfo {
    name: string,
    address: string,
    email: string,
    phone: string,
    website: string,
    short_description: string
}

export interface MenuItem {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
}