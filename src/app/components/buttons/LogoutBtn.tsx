"use client";

import { getCookie } from "@/app/helpers";

import { displaySuccessMessage } from "../toasts/SuccessMessageToast";
import { displayErrorMessage } from "../toasts/ErrorMessageToast";

export default function LogoutBtn() {
    return (
        <button onClick={logout} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
    );
}

function logout() {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Important to include cookies
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': localStorage.getItem("csrftoken") || getCookie("csrftoken"),
        },
    })
    .then(response => {
        if(response.ok) {
            // Optionally clear client-side stored CSRF token if you're managing it in local storage or state
            console.log("Logged out successfully");
            displaySuccessMessage("Logged out successfully. Redirecting to login...");

            // Remove CSRF token and sessionid from local storage
            localStorage.removeItem("csrftoken");
            localStorage.removeItem("sessionid");

            window.location.href = "/login";
        } else {
            console.error("Logout failed");
            displayErrorMessage("Logout failed");
        }
    })
    .catch(error => console.error('Error:', error));
}