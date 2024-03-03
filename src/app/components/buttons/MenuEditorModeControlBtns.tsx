"use client";

import { useState, useContext } from "react";
import { SellerInfoContext, MenuItemsContext, ModeContext } from "../MenuEditor";
import { displaySuccessMessage } from "../toasts/SuccessMessageToast";
import { displayErrorMessage } from "../toasts/ErrorMessageToast";

export default function MenuEditorModeControlBtns() {
    const { mode, setMode } = useContext(ModeContext);
    const menuId = window.location.pathname.split("/").at(-1);

    if (mode === "edit")
        return (
            <div className="flex flex-row text-sm">
                <div 
                    className="p-2 w-1/3 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default"
                    onClick={() => setMode("preview")}>
                    Preview
                </div>
                <SaveMenuBtn menuId={menuId}/>
                <div className="p-2 w-1/3 text-center border-b hover:bg-slate-100 duration-75 font-normal text-blue-500 cursor-default">
                    Publish
                </div>
            </div>
        )

    return (
        <div className="flex flex-row text-sm">
            <div 
                className="p-3 w-32 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default"
                onClick={() => setMode("edit")}>
                Back to editor
            </div>
            <SaveMenuBtn menuId={menuId}/>
            <div className="p-3 w-32 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-blue-500 cursor-default">
                Publish
            </div>
        </div>
    )
}

const SaveMenuBtn = ({ menuId } : { menuId: undefined|string }) => {
    const { sellerInfo, setSellerInfo } = useContext(SellerInfoContext);
    const { menuItems, setMenuItems } = useContext(MenuItemsContext);


    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="p-2 w-1/3 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default"
            onClick={async () => {
                setLoading(true);
                const res = await fetch(`/api/menu/save/${menuId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ menu: { sellerInfo: sellerInfo, menuItems: menuItems } })
                });
                const data = await res.json();

                if (res.ok) {
                    displaySuccessMessage(data.message);
                } else {
                    displayErrorMessage(data.error);
                }

                setLoading(false);
            }}>
            {loading ? "Saving..." : "Save"}
        </div>
    )
}