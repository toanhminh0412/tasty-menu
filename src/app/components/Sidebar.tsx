"use client";

import { useState } from "react";

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

type SidebarProps = {
    setTab : (value: string) => void
}

const MainSidebar = ({ setTab } : SidebarProps) => {
    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-64 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <label 
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => setTab("info")}>
                            <i className="fa-solid fa-shop w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span className="ms-3">Restaurant information</span>
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
    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-64 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
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

const MenuSidebar = ({ setTab } : SidebarProps) => {
    return (
        <aside id="logo-sidebar" className="fixed top-18 left-0 z-20 w-64 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
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