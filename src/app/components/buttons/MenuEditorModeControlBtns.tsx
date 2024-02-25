"use client";

import { useContext } from "react";
import { ModeContext } from "../MenuEditor";

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
                <div className="p-2 w-1/3 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default">
                    Save
                </div>
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
            <div className="p-3 w-32 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-slate-500 hover:text-blue-500 cursor-default">
                Save
            </div>
            <div className="p-3 w-32 text-center border-b border-r hover:bg-slate-100 duration-75 font-normal text-blue-500 cursor-default">
                Publish
            </div>
        </div>
    )
}