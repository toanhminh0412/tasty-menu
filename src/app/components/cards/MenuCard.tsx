import Link from "next/link"

import { Menu } from "@/app/data/interfaces"

export default function MenuCard({ menu } : { menu: Menu }) {
    return (
        <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* <Link href="#">
                <Image className="rounded-t-lg w-full max-h-[300px] object-cover object-center" src="/img/bun-bo-hue.jpg" width={200} height={200} alt="" />
            </Link> */}
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{menu.sellerInfo.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{menu.sellerInfo.short_description}</p>
                <Link href={`/menu/edit/${menu._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <i className="fa-solid fa-pen mr-2 text-sm"></i> Edit
                </Link>
            </div>
        </div>  
    )
}