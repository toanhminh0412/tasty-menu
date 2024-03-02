"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, createContext, useContext } from "react";

import CreateNewMenuBtn from "./buttons/CreateNewMenuBtn";

const ActiveTabContext = createContext<any>("menus");

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<string>("menus");

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
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
            <DashboardContent/>
        </ActiveTabContext.Provider>
    )
}

function DashboardContent() {
    const {activeTab, setActiveTab} = useContext(ActiveTabContext);

    

    switch (activeTab) {
        case "menus":
            return (
                <div className="p-6">
                    <CreateNewMenuBtn/>
                    <div className="py-3">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <Image className="rounded-t-lg w-full max-h-[300px] object-cover object-center" src="/img/bun-bo-hue.jpg" width={200} height={200} alt="" />
                            </Link>
                            <div className="p-5">
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <Link href="/menu/edit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Edit menu
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "orders":
            return (
                <div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        default:
            return null;
    }
}