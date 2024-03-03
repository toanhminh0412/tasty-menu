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

export interface Menu {
    _id: string,
    owner: string,
    isPublished: boolean,
    lastUpdated: Date,
    templateId: number,
    sellerInfo: SellerInfo,
    menuItems: MenuItem[]
}