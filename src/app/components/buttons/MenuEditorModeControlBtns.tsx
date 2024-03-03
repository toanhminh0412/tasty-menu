"use client";

import { useState, useContext } from "react";
import { MenuContext, ModeContext } from "../MenuEditor";
import { displaySuccessMessage } from "../toasts/SuccessMessageToast";
import { displayErrorMessage } from "../toasts/ErrorMessageToast";

export default function MenuEditorModeControlBtns() {
    const { mode, setMode } = useContext(ModeContext);

    if (mode === "edit")
        return (
            <div className="flex flex-row text-sm">
                <div 
                    className="p-2 w-1/3 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default"
                    onClick={() => setMode("preview")}>
                    Preview
                </div>
                <SaveMenuBtn/>
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
            <SaveMenuBtn/>
            <div className="p-3 w-32 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-blue-500 cursor-default">
                Publish
            </div>
        </div>
    )
}

const SaveMenuBtn = () => {
    const { menu, setMenu } = useContext(MenuContext);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="p-2 w-1/3 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default"
            onClick={async () => {
                setLoading(true);
                const res = await fetch(`/api/menu/save/${menu._id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ menu: menu })
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