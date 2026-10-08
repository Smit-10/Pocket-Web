import { IoMicOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";


export default function HowItWorks() {
    return (
        <div className="flex flex-col gap-8 items-center mb-4 mt-10">
            <div className="flex flex-col items-center gap-2">
                <p className="w-fit font-bold text-sm bg-purple-200 text-purple-500 text-bold rounded-2xl p-2">HOW IT WORKS</p>
                <p className="font-bold text-3xl">Simple process. <span className="text-purple-500">Powerfull results.</span></p>
            </div>
            <div className="flex justify-evenly items-center gap-20">
                <div className="flex items-center gap-4">
                    <IoMicOutline size={50} className="rounded-3xl bg-purple-200 text-purple-500 p-1.5" />
                    <div className="flex flex-col">
                        <p className="font-bold">Speak</p>
                        <p>Give your command <br /> in natural language</p>
                    </div>
                </div>
                <BsArrowRight size={30}/>
                <div className="flex items-center gap-4">
                    <LuBrain size={53} className="rounded-3xl bg-purple-200 text-purple-500 p-2" />
                    <div className="flex flex-col">
                        <p className="font-bold">Understand</p>
                        <p>Pocket AI processes and <br /> understands your request</p>
                    </div>
                </div>
                <BsArrowRight size={30}/>
                <div className="flex items-center gap-4">
                    <AiFillThunderbolt size={53} className="rounded-3xl bg-purple-200 text-purple-500 p-2" />
                    <div className="flex flex-col">
                        <p className="font-bold">Act</p>
                        <p>Your task gets done <br /> automatically</p>
                    </div>
                </div>
            </div>
        </div>
    )
}