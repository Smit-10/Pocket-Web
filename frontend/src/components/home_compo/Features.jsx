import { IoMicOutline,IoDesktopSharp } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";

export default function Features() {
    return (
        <div className="md:flex flex flex-wrap flex-row justify-evenly items-center  ml-17 mr-11 mb-4 rounded-2xl py-4 overflow-hidden divide-x divide-gray-400 shadow-2xl">
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <IoMicOutline size={45} className="rounded-2xl p-1 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    Voice <br /> Assistant
                </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <IoDesktopSharp size={48} className="rounded-2xl p-2 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    Desktop <br /> Automation
                </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <BsBrowserChrome size={49} className="rounded-2xl p-2 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    Browser <br /> Automation
                </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <FaRegFilePdf size={49} className="rounded-2xl p-2 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    PDF <br /> Assistant
                </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <MdMailOutline size={49} className="rounded-2xl p-1.5 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    Email <br /> Assistant
                </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-3 py-4">
                <LuDatabase size={49} className="rounded-2xl p-1.5 bg-purple-200 text-purple-600"/>
                <p className="text-center">
                    Persistent <br /> Memory
                </p>
            </div>
        </div>
    )
}