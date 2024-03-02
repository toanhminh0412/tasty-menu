import { SellerInfo, MenuItem } from "./interfaces"

export const defaultSellerInfo:SellerInfo = {
    name: "Seller's name",
    address: "123 Jane St",
    email: "seller@example.com",
    phone: "1234567890",
    website: "mywebsite.example",
    short_description: "Experience authentic Vietnamese flavors: Fresh, aromatic dishes crafted from family recipes, featuring pho, spring rolls, and vibrant, zesty salads!"
}

export const defaultMenuItems:MenuItem[] = [
    {
        id: 1,
        name: "Banh mi",
        price: 10.00,
        description: "A crusty baguette filled with savory meats, pickled vegetables, cilantro, and spicy chili, offering a symphony of flavors",
        image: "/img/banh-mi.jpg"
    },
    {
        id: 2,
        name: "Bun bo hue",
        price: 20.00,
        description: "A spicy Vietnamese beef noodle soup, infused with lemongrass and shrimp paste, topped with herbs and lime slices",
        image: "/img/bun-bo-hue.jpg"
    },
    {
        id: 3,
        name: "Pho",
        price: 20.00,
        description: "A fragrant Vietnamese noodle soup with tender slices of beef, rice noodles, and herbs in a rich, savory broth",
        image: "/img/pho.jpg"
    },
    {
        id: 4,
        name: "Com Tam (Broken rice)",
        price: 18.00,
        description: "A popular Vietnamese dish featuring broken rice, grilled pork, crispy skin, fresh vegetables, and a sweet fish sauce.",
        image: "/img/com-tam.jpg"
    },
    {
        id: 5,
        name: "Goi cuon (Salad roll)",
        price: 12.00,
        description: "Fresh, light Vietnamese spring rolls filled with crunchy vegetables, herbs, and shrimp, wrapped in delicate rice paper.",
        image: "/img/salad-roll.jpg"
    }
]