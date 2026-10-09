import Logo from "../logo/Logo"
import { FaWindows, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex items-end justify-between mt-10 px-7 py-2 border-t bg-gray-200 border-t-gray-300 h-20 pb-4">
            <div>
                <Logo size={30} textSize={1} color={"black"} AIcolor={"bg-[linear-gradient(135deg,#00ffff,#6f3cff,#ff4fd8)]"} />
            </div>
            <div className="flex gap-15">
                <a href="#features"><div className="cursor-pointer hover:text-purple-700">Features</div></a>
                <div className="cursor-pointer hover:text-purple-700">About Us</div>
            </div>
            <div className="flex gap-6">

                <a href="https://GitHub.com/Abrar822/Pocket-AI" target="_blank"><FaGithub size={20} className="cursor-pointer hover:text-purple-700"/></a>
                <a href="#hero"><FaWindows size={20} className="cursor-pointer hover:text-purple-700"/></a>

            </div>
        </footer>
    )
}