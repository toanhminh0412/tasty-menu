"use client";

import Image from "next/image";
import { useContext, useState } from "react";


import { MenuContext } from "./MenuEditor";
import MenuEditorModeControlBtns from "./buttons/MenuEditorModeControlBtns";
import { MenuItem } from "../data/interfaces";
import ImageUploadPreviewer from "./ui/ImageUploadPreviewer";

export default function Sidebar() {
    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 bottom-0 z-20 w-72 overflow-y-auto transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <MenuEditorModeControlBtns/>
            <div className="h-full px-3 py-4 bg-white dark:bg-gray-800">
                <SidebarDisplay/>
            </div>
        </aside>
    )
}

const SidebarDisplay = () => {
    const [tab, setTab] = useState<string>("main");

    if (tab === "main") {
        return (
            <MainSidebar setTab={setTab}/>
        )
    }

    if (tab === "info") {
        return (
            <InfoSidebar setTab={setTab}/>
        )
    }

    if (tab === "menu") {
        return (
            <MenuSidebar setTab={setTab}/>
        )
    }
}

interface SidebarProps {
    setTab : (value: string) => void
}

const MainSidebar = ({ setTab } : SidebarProps) => {
    return (
        <ul className="space-y-2 font-medium">
            <li>
                <label 
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={() => setTab("info")}>
                    <i className="fa-solid fa-shop w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                    <span className="ms-3">Seller information</span>
                </label>
            </li>
            <li>
                <label
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={() => setTab("menu")}>
                    <i className="fa-solid fa-utensils w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                    <span className="ms-3">Menu</span>
                </label>
            </li>
        </ul>
    )
}

const InfoSidebar = ({ setTab } : SidebarProps) => {
    const { menu, setMenu } = useContext(MenuContext);

    return (
        <ul className="space-y-2 font-medium">
            <li>
                <label 
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={() => setTab("main")}>
                    <i className="fa-solid fa-arrow-left w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                    <span className="ms-3">Back</span>
                </label>
                <form className="mt-4">
                    <div>
                        <label htmlFor="seller_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller/Business&apos; name</label>
                        <input 
                            type="text" 
                            id="seller_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="e.g. McDonald" 
                            value={menu.sellerInfo.name}
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.name = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            
                            }}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="e.g. 123 Jane St"
                            value={menu.sellerInfo.address}
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.address = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            }}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="e.g. seller@example.com"
                            value={menu.sellerInfo.email}
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.email = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            }}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="1234567890" 
                            pattern="[0-9]{10}"
                            value={menu.sellerInfo.phone}
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.phone = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            
                            }}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                        <textarea 
                            id="short_description" 
                            rows={4} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Briefly describe your food..."
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.short_description = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            
                            }}>
                        {menu.sellerInfo.short_description}    
                        </textarea>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                        <input 
                            type="url" 
                            id="website"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="mywebsite.example"
                            value={menu.sellerInfo.website}
                            onChange={e => {
                                let sellerInfo = menu.sellerInfo;
                                sellerInfo.website = e.target.value;
                                setMenu({
                                    ...menu,
                                    sellerInfo: sellerInfo
                                })
                            
                            }}/>
                    </div>
                </form>
            </li>
        </ul>
    )
}

const MenuSidebar = ({ setTab } : SidebarProps) => {
    const { menu, setMenu } = useContext(MenuContext);

    return (
        <>
            <ul className="space-y-2 font-medium">
                <li>
                    <label 
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        onClick={() => setTab("main")}>
                        <i className="fa-solid fa-arrow-left w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span className="ms-3">Back</span>
                    </label>
                </li>
            </ul>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {menu.menuItems.map((item, itemInd) => <SidebarMenuItem key={item.id} item={item} itemInd={itemInd}/>)}
                </ul>
            </div>
        </>
    )
}

const SidebarMenuItem = ({ item, itemInd } : { item: MenuItem, itemInd: number }) => {
    const { menu, setMenu } = useContext(MenuContext);
    const [editState, setEditState] = useState<boolean>(false);
    
    // Events on the parent element will not be triggered on the child element
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const onItemNameChange = (e: React.ChangeEvent<HTMLInputElement>, itemInd: number) => {
        let newMenuItems = [...menu.menuItems];
        newMenuItems[itemInd].name = e.target.value;
        setMenu({...menu, menuItems: newMenuItems});
    }

    const onItemPriceChange = (e: React.ChangeEvent<HTMLInputElement>, itemInd: number) => {
        let newMenuItems = [...menu.menuItems];
        newMenuItems[itemInd].price = parseFloat(e.target.value);
        setMenu({...menu, menuItems: newMenuItems});
    }

    const onItemDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, itemInd: number) => {
        let newMenuItems = [...menu.menuItems];
        newMenuItems[itemInd].description = e.target.value;
        setMenu({...menu, menuItems: newMenuItems});
    }

    const onImageChange = (imgSrc: string) => {
        let newMenuItems = [...menu.menuItems];
        newMenuItems[itemInd].image = imgSrc;
        setMenu({...menu, menuItems: newMenuItems});        
    }

    if (editState) 
    return (
        <li className="py-3 sm:py-4 px-2 duration-100 cursor-default hover:bg-slate-100">
            <form onSubmit={() => setEditState(!editState)}>
                <div className="mb-3 text-center">
                    {/* <Image onClick={stopPropagation} width={100} height={100} className="w-[100px] h-[100px] rounded-md object-cover mx-auto" src={item.image} alt="Neil image"/> */}
                    <ImageUploadPreviewer 
                        label="Food photos"
                        onChange={onImageChange}
                        onClick={stopPropagation}
                        content={item.image}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="item_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item name</label>
                    <input 
                        type="text" 
                        id="item_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="e.g. Fried chicken" 
                        value={item.name}
                        onClick={stopPropagation}
                        onChange={e => onItemNameChange(e, itemInd)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="item_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item price</label>
                    <input 
                        type="number" 
                        id="item_price" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="e.g. $60.00" 
                        value={item.price.toFixed(2)}
                        onClick={stopPropagation}
                        onChange={e => onItemPriceChange(e, itemInd)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="item_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item description</label>
                    <textarea 
                        id="item_description" 
                        rows={4} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Briefly describe your food..."
                        onClick={stopPropagation}
                        onChange={e => onItemDescriptionChange(e, itemInd)}
                        value={item.description}></textarea>
                </div>
                <div className="text-right">
                    <input 
                        type="submit"
                        value="Done"
                        className="ml-auto px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                </div>
            </form>
        </li>
    )

    return (
        <li className="py-3 sm:py-4 px-2 hover:bg-slate-100 duration-100 cursor-default" onClick={() => setEditState(!editState)}>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Image width={100} height={100} className="w-8 h-8 rounded-full object-cover" src={item.image} alt="Neil image"/>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.description}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${item.price.toFixed(2)}
                </div>
            </div>
        </li>
    )
}