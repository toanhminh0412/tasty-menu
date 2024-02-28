"use client";

import { useState } from "react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("menus");

    return (
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                        <label 
                            className={activeTab === "menus" ? 
                            "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group"
                            : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                            onClick={() => setActiveTab("menus")}>
                            <i 
                            className={activeTab === "menus" ? 
                            "fa-solid fa-burger w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                            : "fa-solid fa-burger w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}></i>Menus
                        </label>
                    </li>
                    <li className="me-2">
                        <label className={activeTab === "orders" ? 
                        "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 group"
                        : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                        onClick={() => setActiveTab("orders")}>
                            <i className={activeTab === "orders" ? 
                            "fa-solid fa-address-book w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                            : "fa-solid fa-address-book w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}></i>Orders
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}