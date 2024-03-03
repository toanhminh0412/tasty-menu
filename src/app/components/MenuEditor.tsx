'use client';

import { useState, createContext, useContext } from "react";

import defaultMenu1 from "../data/defaultMenu1";

import Sidebar from "./Sidebar";
import Menu1 from "./menus/Menu1";
import PreviewNavbar from "./PreviewNavbar";


// Currently leave these two types as any due to complication in variables passed to the context provider
export const MenuContext = createContext<any>(defaultMenu1);
export const ModeContext = createContext<any>("edit");
export const PreviewDeviceContext = createContext<any>("laptop");

export default function MenuEditor({ menu }) {
    const [activeMenu, setActiveMenu] = useState<any>(menu);
    const [mode, setMode] = useState<string>("edit");
    const [previewDevice, setPreviewDevice] = useState<string>("laptop");
    
    return (
        <MenuContext.Provider value={{ menu: activeMenu, setMenu: setActiveMenu }}>
            <ModeContext.Provider value={{ mode, setMode }}>
                <PreviewDeviceContext.Provider value={{ previewDevice, setPreviewDevice }}>
                    <MenuEditorContent/>
                </PreviewDeviceContext.Provider>
            </ModeContext.Provider>
        </MenuContext.Provider>
    )
}

const MenuEditorContent = () => {
    const { menu, _setMenu } = useContext(MenuContext);
    const {mode, _setMode} = useContext(ModeContext);
    const {previewDevice, _setPreviewDevice} = useContext(PreviewDeviceContext);

    if (mode === "edit") {
        return (
            <>
                <Sidebar/>
                <div className="ml-72">
                    <div style={{ zoom: "90%" }}>
                        <Menu1 menu={menu}/>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="fixed top-17 w-screen">
                <PreviewNavbar/>
            </div>
            <div className="mt-11">
                {previewDevice === "laptop" ? 
                <div className="@container">
                    <Menu1 menu={menu}/>
                </div>
                :
                <div className="py-10">
                    <div className="@container relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[2.5rem] h-[600px] w-[330px] overflow-y-scroll">
                        <Menu1 menu={menu}/>
                    </div>
                </div>}
            </div>
        </>
    )
}