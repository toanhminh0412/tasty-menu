'use client';

import Image from "next/image";
import Sidebar from "./Sidebar";
import { useState, createContext, useContext } from "react";

interface SellerInfo {
    name: string,
    address: string,
    email: string,
    phone: string,
    website: string,
    short_description: string
}

interface MenuItem {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
}

const defaultSellerInfo:SellerInfo = {
    name: "Seller's name",
    address: "123 Jane St",
    email: "seller@example.com",
    phone: "1234567890",
    website: "mywebsite.example",
    short_description: "Experience authentic Vietnamese flavors: Fresh, aromatic dishes crafted from family recipes, featuring pho, spring rolls, and vibrant, zesty salads!"
}

const defaultMenuItems:MenuItem[] = [
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

// Currently leave these two types as any due to complication in variables passed to the context provider
export const SellerInfoContext = createContext<any>(defaultSellerInfo);
export const MenuItemsContext = createContext<any>(defaultMenuItems);

export default function MenuEditor() {
    const [sellerInfo, setSellerInfo] = useState<SellerInfo>(defaultSellerInfo);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
    
    return (
        <SellerInfoContext.Provider value={{ sellerInfo, setSellerInfo }}>
            <MenuItemsContext.Provider value={{ menuItems, setMenuItems }}>
                {/* Side menu */}
                <Sidebar/>
                {/* Menu page */}
                <div className="ml-72 p-6 bg-yellow-50 min-h-screen">
                    {/* Seller's information */}
                    {sellerInfo.name ? <h5 className="text-xl font-bold dark:text-white">{sellerInfo.name}</h5> : null}
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-4">Menu</h1>
                    <div className="flex flex-row flex-wrap gap-10 text-lg">
                    {sellerInfo.address ? <div>
                        <i className="fa-solid fa-location-dot text-orange-500 mr-2"></i>
                        <label className="text-slate-500">{sellerInfo.address}</label>
                    </div> : null}
                    {sellerInfo.email ? <div>
                        <i className="fa-solid fa-envelope text-orange-500 mr-2"></i>
                        <label className="text-slate-500">{sellerInfo.email}</label>
                    </div> : null}
                    {sellerInfo.phone ? <div>
                        <i className="fa-solid fa-phone text-orange-500 mr-2"></i>
                        <label className="text-slate-500">{sellerInfo.phone}</label>
                    </div> : null}
                    {sellerInfo.website ? <div>
                        <i className="fa-solid fa-globe text-orange-500 mr-2"></i>
                        <label className="text-slate-500">{sellerInfo.website}</label>
                    </div> : null}
                </div>
                {sellerInfo.short_description ? <blockquote className="text-md italic font-light text-slate-700 dark:text-white w-[70%] mt-4">
                    <p>{sellerInfo.short_description}</p>
                </blockquote> : null}

                {/* Menu content */}
                <div className="mt-6 pr-10">
                    {menuItems.map((item) => (
                    <div key={item.id} className="flex flex-row gap-4 my-3">
                        <div className="w-[80%]">
                            <div className="flex flex-row justify-between">
                                <h5 className="text-xl font-bold dark:text-white">{item.name}</h5>
                                <h5 className="text-xl font-bold dark:text-white">${item.price.toFixed(2)}</h5>
                            </div>
                            <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                                {item.description}
                            </p>
                        </div>
                            <Image src={item.image} alt="Banh mi image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
                    </div>
                    ))}
                    </div>
                </div>
            </MenuItemsContext.Provider>
        </SellerInfoContext.Provider>
    )
}