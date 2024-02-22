"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
    return (
        <button onClick={() => signOut({callbackUrl: "/login"})} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
    );
}