import { FaWindows, FaGithub } from "react-icons/fa";
import DashboardImg from "./images/dashboard-img.png"

function Hero() {
  return (
    <div className="flex items-center md:p-8 p-2 m-3 flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col p-4">
            <div className="p-1 md:px-2 bg-purple-200 w-fit text-sm text-purple-500 text-bold font-bold rounded-2xl">
                Your Personal Desktop Assistant
            </div>

            <div className="p-1 md:px-2">
                <h1 className="text-7xl font-bold">Do more</h1>
                <h1 className="text-7xl font-bold">with your</h1>
                <h1 className="text-7xl font-bold text-purple-600">computer<span className="text-7xl font-bold text-black">.</span></h1>

                <h1 className="py-6 text-slate-700 text-xl">Pocket AI helps you automate tasks, interact with documents, <br/> browse the web and boost your productivity - all <br /> from your desktop</h1>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-white transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                        <FaWindows size={18}/> Download Pocket AI
                    </button>

                    <button className="flex items-center gap-2 rounded-xl bg-slate-200 cursor-pointer px-5 py-4">
                        <FaGithub size={18}/> View on Github
                    </button>
                </div>
            </div>
        </div>

        {/* Pocket dashboard image */}
        <div className="relative md:w-5/6">
            <img 
            src={DashboardImg}
            alt="Dashboard image"
            className="rounded-2xl shadow-[8px_8px_12px_rgba(79,70,229,0.9)]" />
        </div>
    </div>
  )
}

export default Hero