"use client";

import { useContext, useState } from "react";
import { SellerInfoContext, MenuItemsContext } from "./MenuEditor";

export default function Sidebar() {
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
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-72 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
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
            </div>
        </aside>
    )
}

const InfoSidebar = ({ setTab } : SidebarProps) => {
    const { sellerInfo, setSellerInfo } = useContext(SellerInfoContext);

    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-72 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
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
                                <label htmlFor="seller_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller/Business' name</label>
                                <input 
                                    type="text" 
                                    id="seller_name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="e.g. McDonald" 
                                    value={sellerInfo.name}
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        name: e.target.value
                                    })}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input 
                                    type="text" 
                                    id="address" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="e.g. 123 Jane St"
                                    value={sellerInfo.address}
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        address: e.target.value
                                    })}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="e.g. seller@example.com"
                                    value={sellerInfo.email}
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        email: e.target.value
                                    })}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="1234567890" 
                                    pattern="[0-9]{10}"
                                    value={sellerInfo.phone}
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        phone: e.target.value
                                    })}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                                <textarea 
                                    id="short_description" 
                                    rows={4} 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Briefly describe your food..."
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        short_description: e.target.value
                                    })}>
                                {sellerInfo.short_description}    
                                </textarea>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                                <input 
                                    type="url" 
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="mywebsite.example"
                                    value={sellerInfo.website}
                                    onChange={e => setSellerInfo({
                                        ...sellerInfo,
                                        website: e.target.value
                                    })}/>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

const MenuSidebar = ({ setTab } : SidebarProps) => {
    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-72 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
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
            </div>
        </aside>
    )
}