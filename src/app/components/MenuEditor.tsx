'use client';

import { useState, createContext, useContext } from "react";

import Sidebar from "./Sidebar";
import Menu1 from "./menus/Menu1";
import PreviewNavbar from "./PreviewNavbar";

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
export const ModeContext = createContext<any>("edit");
export const PreviewDeviceContext = createContext<any>("laptop");

export default function MenuEditor() {
    const [sellerInfo, setSellerInfo] = useState<SellerInfo>(defaultSellerInfo);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
    const [mode, setMode] = useState<string>("edit");
    const [previewDevice, setPreviewDevice] = useState<string>("laptop");
    
    return (
        <SellerInfoContext.Provider value={{ sellerInfo, setSellerInfo }}>
            <MenuItemsContext.Provider value={{ menuItems, setMenuItems }}>
                <ModeContext.Provider value={{ mode, setMode }}>
                    <PreviewDeviceContext.Provider value={{ previewDevice, setPreviewDevice }}>
                        <MenuEditorContent/>
                    </PreviewDeviceContext.Provider>
                </ModeContext.Provider>
            </MenuItemsContext.Provider>
        </SellerInfoContext.Provider>
    )
}

const MenuEditorContent = () => {
    const {sellerInfo, _setSellerInfo} = useContext(SellerInfoContext);
    const {menuItems, _setMenuItems} = useContext(MenuItemsContext);
    const {mode, _setMode} = useContext(ModeContext);
    const {previewDevice, _setPreviewDevice} = useContext(PreviewDeviceContext);

    if (mode === "edit") {
        return (
            <>
                <Sidebar/>
                <div className="ml-72">
                    <div style={{ zoom: "90%" }}>
                        <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="fixed top-17 w-screen">
                <PreviewNavbar/>
            </div>
            <div className="mt-10">
                {previewDevice === "laptop" ? 
                <div className="@container">
                    <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
                </div>
                :
                <div className="py-10">
                    <div className="@container relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[2.5rem] h-[600px] w-[330px] overflow-y-scroll">
                        <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
                    </div>
                </div>}
            </div>
        </>
    )
}