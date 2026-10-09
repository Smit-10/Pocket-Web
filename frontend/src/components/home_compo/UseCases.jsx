import { RiGraduationCapFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";

export default function UseCases() {
    return (
        <div id="UseCases" className="flex flex-col gap-8 items-center mb-4 mt-12">
            <div className="flex flex-col items-center gap-2">
                <p className="w-fit font-bold text-sm bg-purple-200 text-purple-500 text-bold rounded-2xl p-2">USE CASES</p>
                <p className="font-bold text-3xl">Build for different <span className="text-purple-500">workflows.</span></p>
            </div>
            <div className="flex gap-20">
                <div className="flex gap-4 rounded-2xl shadow-2xl p-4 pr-20">
                    <RiGraduationCapFill size={50} className="rounded-3xl bg-purple-200 text-purple-500 p-2" />
                    <div>
                        <p className="font-bold">Students</p>
                        <ul>
                            <li><span className="mr-2 text-green-600">✓</span>Research papers</li>
                            <li><span className="mr-2 text-green-600">✓</span>PDF analysis</li>
                            <li><span className="mr-2 text-green-600">✓</span>Productivity tasks</li>
                            <li><span className="mr-2 text-green-600">✓</span>Study assistance</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 rounded-2xl shadow-2xl p-4 pr-20">
                    <FaCode size={50} className="rounded-3xl bg-purple-200 text-purple-500 p-2" />
                    <div>
                        <p className="font-bold">Developers</p>
                        <ul>
                            <li><span className="mr-2 text-green-600">✓</span>Open application</li>
                            <li><span className="mr-2 text-green-600">✓</span>Automate workflows</li>
                            <li><span className="mr-2 text-green-600">✓</span>Browser automation</li>
                            <li><span className="mr-2 text-green-600">✓</span>Faster development</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 rounded-2xl shadow-2xl p-4 pr-20">
                    <PiBagSimpleFill size={50} className="rounded-3xl bg-purple-200 text-purple-500 p-2" />
                    <div>
                        <p className="font-bold">Professionals</p>
                        <ul>
                            <li><span className="mr-2 text-green-600">✓</span>Email assistance</li>
                            <li><span className="mr-2 text-green-600">✓</span>Document analysis</li>
                            <li><span className="mr-2 text-green-600">✓</span>Repetitive tasks</li>
                            <li><span className="mr-2 text-green-600">✓</span>Everyday productivity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}