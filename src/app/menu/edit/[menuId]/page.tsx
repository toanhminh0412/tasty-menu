import Link from "next/link";
import { headers } from "next/headers";

import MenuEditor from "@/app/components/MenuEditor";

export default async function Page({ params }) {
    // Get the menu details by id
    const { menuId } = params;
    const res = await fetch(
        `${process.env.APP_URL}/api/menu/get/${menuId}`,
        {
            method: "GET",
            // Need this for NextAuth getServerSession to work
            // ONLY when fetching from server side page
            headers: Object.fromEntries(headers())
        }
    );
    const menu = await res.json();

    if (res.ok) {
        return <MenuEditor menu={menu}/>;
    }

    return (
        <div className="prose max-w-none p-12">
            <h1>{menu.error}</h1>
            <Link href="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline">
                Back to dashboard
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    )
}