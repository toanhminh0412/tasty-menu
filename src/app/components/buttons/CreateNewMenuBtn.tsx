"use client";

import { useState } from "react";

import defaultMenu1 from "@/app/data/defaultMenu1";

import { displaySuccessMessage } from "../toasts/SuccessMessageToast";
import { displayErrorMessage } from "../toasts/ErrorMessageToast";

export default function CreateNewMenuBtn() {
    const [loading, setLoading] = useState<boolean>(false);

    // Create a new menu in the database
    const createMenu = async() => {
        setLoading(true);
        const response = await fetch("/api/menu/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ menu: { sellerInfo: defaultMenu1.sellerInfo, menuItems: defaultMenu1.menuItems } })
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            displaySuccessMessage(data.message);
            window.location.href = `/menu/edit/${data.menuId}`;
        } else {
            setLoading(false);
            displayErrorMessage(data.error);
        }
    }

    // Button is in loading state
    if (loading) {
        return (
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                <i className="fa-solid fa-spinner w-3.5 h-3.5 me-2 animate-spin"></i>
                Creating...
            </button>
        )
    }
    
    // Button is in normal state
    return (
        <button 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={createMenu}>
            <i className="fa-solid fa-plus w-3.5 h-3.5 me-2"></i>
            Create a menu
        </button>
    )
}