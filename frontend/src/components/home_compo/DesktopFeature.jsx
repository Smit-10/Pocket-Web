import DesktopImg from '../images/desktop_feature.png'

function DesktopFeature() {
  return (
    <div className="flex items-center p-8 ml-4 flex-col md:flex-row">
            <div className="w-2/3 flex flex-col p-4">
                <div className="p-1 px-2 bg-purple-200 w-fit text-sm text-purple-500 text-bold font-bold rounded-2xl">
                    DESKTOP AUTOMATION
                </div>
    
                <div className="p-1 px-2">
                    <h1 className="text-7xl font-bold">Turn your ideas</h1>
                    <h1 className="text-7xl font-bold text-purple-600">into actions<span className="text-7xl font-bold text-black">.</span></h1>
    
                    <h1 className="py-6 text-slate-700 text-xl">Control your computer using natural language. Open apps, <br/> manage files, take screenshots, control system settings <br/> and much more - just by speaking or typing.</h1>
    
                    <h1 className="py-1 text-slate-700 text-lg">
                        <span className="text-green-600">✓ </span>Open and close applications
                    </h1>
                    <h1 className="py-1 text-slate-700 text-lg">
                        <span className="text-green-600">✓ </span>File Operations
                    </h1>
                    <h1 className="py-1 text-slate-700 text-lg">
                        <span className="text-green-600">✓ </span>System controls (volume, brightness, etc.)
                    </h1>
                    <h1 className="py-1 text-slate-700 text-lg">
                        <span className="text-green-600">✓ </span>Take screenshots and automate tasks
                    </h1>
                </div>
            </div>
    
            {/* Desktop image */}
            <div className="relative px-20">
                <img 
                src={DesktopImg}
                alt="Dashboard image"
                className="w-200 md:mt-12 rounded-2xl shadow-[8px_8px_12px_rgba(79,70,229,0.9)]" />
            </div>
        </div>
  )
}

export default DesktopFeature