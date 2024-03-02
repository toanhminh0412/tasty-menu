'use client';

import { useState, createContext, useContext } from "react";

import { SellerInfo, MenuItem } from "../data/interfaces";
import { defaultSellerInfo, defaultMenuItems } from "../data/defaultMenu1";

import Sidebar from "./Sidebar";
import Menu1 from "./menus/Menu1";
import PreviewNavbar from "./PreviewNavbar";


// Currently leave these two types as any due to complication in variables passed to the context provider
export const SellerInfoContext = createContext<any>(defaultSellerInfo);
export const MenuItemsContext = createContext<any>(defaultMenuItems);
export const ModeContext = createContext<any>("edit");
export const PreviewDeviceContext = createContext<any>("laptop");

export default function MenuEditor({ menu }) {
    const [sellerInfo, setSellerInfo] = useState<SellerInfo>(menu.sellerInfo);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(menu.menuItems);
    const [mode, setMode] = useState<string>("edit");
    const [previewDevice, setPreviewDevice] = useState<string>("laptop");
    
    return (
        <SellerInfoContext.Provider value={{ sellerInfo, setSellerInfo }}>
            <MenuItemsContext.Provider value={{ menuItems, setMenuItems }}>
                <ModeContext.Provider value={{ mode, setMode }}>
                    <PreviewDeviceContext.Provider value={{ previewDevice, setPreviewDevice }}>
                        <MenuEditorContent/>
                    </PreviewDeviceContext.Provider>
                </ModeContext.Provider>
            </MenuItemsContext.Provider>
        </SellerInfoContext.Provider>
    )
}

const MenuEditorContent = () => {
    const {sellerInfo, _setSellerInfo} = useContext(SellerInfoContext);
    const {menuItems, _setMenuItems} = useContext(MenuItemsContext);
    const {mode, _setMode} = useContext(ModeContext);
    const {previewDevice, _setPreviewDevice} = useContext(PreviewDeviceContext);

    if (mode === "edit") {
        return (
            <>
                <Sidebar/>
                <div className="ml-72">
                    <div style={{ zoom: "90%" }}>
                        <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
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
            <div className="mt-10">
                {previewDevice === "laptop" ? 
                <div className="@container">
                    <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
                </div>
                :
                <div className="py-10">
                    <div className="@container relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[2.5rem] h-[600px] w-[330px] overflow-y-scroll">
                        <Menu1 sellerInfo={sellerInfo} menuItems={menuItems}/>
                    </div>
                </div>}
            </div>
        </>
    )
}