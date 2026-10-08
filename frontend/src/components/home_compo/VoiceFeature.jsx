import VoiceImg from '../images/voice_feature.png'

function VoiceFeature() {
  return (
    <div className="flex items-center p-8 m-3 flex-col lg:flex-row">
        {/* Pocket dashboard image */}
        <div className="relative pl-4 mr-20">
            <img
                src={VoiceImg}
                alt="Dashboard image"
                className="w-200 md:mt-12 rounded-2xl shadow-[8px_8px_12px_rgba(79,70,229,0.9)]"
        />
        </div>
      
        <div className="w-2/3 flex flex-col px-4 ml-24">
          <div className="p-1 px-2 bg-purple-200 w-fit text-sm text-purple-500 text-bold font-bold rounded-2xl">
            VOICE ASSISTANT
          </div>
  
          <div className="p-1 px-2">
            <h1 className="text-7xl font-bold">Speak. Automate.</h1>
            <h1 className="text-7xl font-bold text-black">
              Get <span className="text-7xl font-bold text-purple-600">things done.</span>
            </h1>
  
            <h1 className="py-6 text-slate-700 text-xl">
              Use your voice to interact with your computer. Pocket AI <br/> understands your commands and performs the tasks for you.
            </h1>
  
            <h1 className="py-1 text-slate-700 text-lg">
              <span className="text-green-600">✓ </span>Accurate speech recognition
            </h1>
            <h1 className="py-1 text-slate-700 text-lg">
              <span className="text-green-600">✓ </span>Natural language understanding
            </h1>
            <h1 className="py-1 text-slate-700 text-lg">
              <span className="text-green-600">✓ </span>Hands-free productivity
            </h1>
            <h1 className="py-1 text-slate-700 text-lg">
              <span className="text-green-600">✓ </span>Works even offline (local processing)
            </h1>
          </div>
        </div>
    </div>
  );
}

export default VoiceFeature;
