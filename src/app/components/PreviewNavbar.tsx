"use client";

import Image from "next/image"
import { useContext } from "react";

import { PreviewDeviceContext } from "./MenuEditor"
import MenuEditorModeControlBtns from "./buttons/MenuEditorModeControlBtns"

export default function PreviewNavbar() {
    const {previewDevice, setPreviewDevice} = useContext(PreviewDeviceContext);

    return (
        <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap justify-between">
                <MenuEditorModeControlBtns/>
                {/* Device mockup buttons */}
                <div className="flex">
                    <div className={`w-10 px-3 text-center flex flex-col justify-center ${previewDevice === "laptop" ? "bg-slate-200" : "hover:bg-slate-200"} duration-75`} onClick={() => setPreviewDevice("laptop")}>
                        <i className="fa-solid fa-laptop my-auto"></i>
                    </div>
                    <div className={`w-10 text-center flex flex-col justify-center ${previewDevice === "phone" ? "bg-slate-200" : "hover:bg-slate-200"} duration-75`} onClick={() => setPreviewDevice("phone")}>
                        <Image className="mx-auto" src="/img/phone-icon.png" width={24} height={24} alt="Phone icon"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}