import { IoHome,IoSettings,IoDesktopSharp } from "react-icons/io5";
import { LuBrain,LuDatabase } from "react-icons/lu";
import { BsBrowserChrome } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function TableContent() {
    return(
        <div className="fixed left-0 top-[90px] h-[calc(100%-560)] w-80 overflow-y-auto">
            <div className="m-4 flex flex-col justify-center items-start bg-gray-100 rounded-xl shadow-lg p-2">
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in ">
                    <IoHome/>
                    Introduction
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <LuBrain/>
                    System Prompt
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <LuDatabase/>
                    Persistent Memory
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <IoSettings/>
                    Settings
                </div>
                <div className="my-2 border w-full border-gray-300"></div>
                <div className="flex items-center gap-4 text-xl p-2 w-full rounded-md font-">
                    Functionalities
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <IoDesktopSharp/>
                    Desktop Automation
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <BsBrowserChrome/>
                    Browser Automation
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <MdMailOutline/>
                    Email Generation
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <FaRegFilePdf/>
                    PDF Assistant
                </div>
                <div className="my-2 border w-full border-gray-300"></div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <IoDesktopSharp/>
                    
                </div>
                <div className="flex items-center gap-4 text-xl p-2 w-full hover:text-purple-800 hover:bg-purple-100 hover:border-l-4 rounded-md transition-all ease-in">
                    <IoDesktopSharp/>
                    Desktop Automation
                </div>
            </div>
        </div>
    )
}