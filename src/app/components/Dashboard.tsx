"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";

import { Menu } from "../data/interfaces";
import { displayErrorMessage } from "./toasts/ErrorMessageToast";
import CreateNewMenuBtn from "./buttons/CreateNewMenuBtn";
import MenuCard from "./cards/MenuCard";

const ActiveTabContext = createContext<any>("menus");
const AllMenusContext = createContext<any>([]);
const LoadingContext = createContext<any>(true);

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<string>("menus");
    const [allMenus, setAllMenus] = useState<Menu[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Get all menus owned by the currently logged in user
    useEffect(() => {
        const initialize = async () => {
            await getUserMenus();

            setLoading(false);
        }

        const getUserMenus = async () => {
            const res = await fetch("/api/menu/getAll");
            const data = await res.json();
            
            if (res.ok) {
                setAllMenus(data.menus);
            } else {
                displayErrorMessage(data.error);
            }
            
        }

        initialize();
    }, [])

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
            <AllMenusContext.Provider value={{ allMenus, setAllMenus }}>
                <LoadingContext.Provider value={{ loading, setLoading }}>
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
                </LoadingContext.Provider>
            </AllMenusContext.Provider>
        </ActiveTabContext.Provider>
    )
}

function DashboardContent() {
    const {activeTab, setActiveTab} = useContext(ActiveTabContext);
    const {allMenus, setAllMenus} = useContext(AllMenusContext);
    const {loading, setLoading} = useContext(LoadingContext);

    switch (activeTab) {
        case "menus":
            return (
                <div className="p-6">
                    <CreateNewMenuBtn/>

                    {/* Loading state */}
                    <div className={loading ? "py-5" : "hidden"}>
                        {/* Loading card with styling similar to MenuCard. Create 4 of them */}
                        <div className="flex flex-row flex-wrap gap-3 w-full">
                            {Array.from({length: 4}).map((_, i) => (
                                <div key={i} className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="animate-pulse rounded-t-lg bg-gray-200 dark:bg-gray-700 h-[200px] w-full"></div>
                                    <div className="p-5">
                                        <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 w-1/2 mb-2"></div>
                                        <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 w-3/4 mb-3"></div>
                                        <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* User has no menus */}
                    <div className={!loading && allMenus.length === 0 ? "py-5" : "hidden"}>
                        <div className="flex flex-col items-center justify-center py-10">
                            <p className="mt-5 text-lg font-medium text-gray-500 dark:text-gray-400">You have no menus yet. Create one right now!</p>
                        </div>
                    </div>

                    {/* User has some menus */}
                    <div className={!loading && allMenus.length > 0 ? "py-5" : "hidden"}>
                        <div className="flex flex-row flex-wrap gap-3 w-full">
                            {allMenus.map((menu:Menu) => (
                                <MenuCard key={menu._id} menu={menu}/>
                            ))}
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