import Image from "next/image";

import { Menu } from "@/app/data/interfaces";

export default function Menu1({ menu }: { menu: Menu }) {
    return (
        <div className="p-4 @5xl:p-20 bg-yellow-50 min-h-screen text-black">
            {/* Seller's information */}
            {menu.sellerInfo.name ? <h5 className="text-lg @5xl:text-xl font-bold">{menu.sellerInfo.name}</h5> : null}
            <h1 className="mb-4 text-3xl @4xl:text-5xl @5xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 mt-4">Menu</h1>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 @5xl:gap-10 text-sm @4xl:text-lg">
            {menu.sellerInfo.address ? <div>
                <i className="fa-solid fa-location-dot text-orange-500 mr-2"></i>
                <label className="text-slate-500">{menu.sellerInfo.address}</label>
            </div> : null}
            {menu.sellerInfo.email ? <div>
                <i className="fa-solid fa-envelope text-orange-500 mr-2"></i>
                <label className="text-slate-500">{menu.sellerInfo.email}</label>
            </div> : null}
            {menu.sellerInfo.phone ? <div>
                <i className="fa-solid fa-phone text-orange-500 mr-2"></i>
                <label className="text-slate-500">{menu.sellerInfo.phone}</label>
            </div> : null}
            {menu.sellerInfo.website ? <div>
                <i className="fa-solid fa-globe text-orange-500 mr-2"></i>
                <label className="text-slate-500">{menu.sellerInfo.website}</label>
            </div> : null}
        </div>
        {menu.sellerInfo.short_description ? <blockquote className="text-sm @4xl:text-base italic font-light text-slate-700 w-[70%] mt-4">
            <p>{menu.sellerInfo.short_description}</p>
        </blockquote> : null}

        {/* Menu content */}
        <div className="mt-6">
            {menu.menuItems.map((item) => (
            <div key={item.id} className="flex flex-row gap-4 my-3">
                <div className="w-[90%]">
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg @4xl:text-xl font-bold">{item.name}</h5>
                        <h5 className="text-lg @4xl:text-xl font-bold">${item.price.toFixed(2)}</h5>
                    </div>
                    <p className="text-sm @4xl:text-base italic font-light text-slate-700 mt-2">
                        {item.description}
                    </p>
                </div>
                <Image src={item.image} alt={`${item.name} image`} width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
            </div>
            ))}
            </div>
        </div>
    )
}