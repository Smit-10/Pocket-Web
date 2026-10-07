import DesktopFeature from "../components/home_compo/DesktopFeature"
import Hero from "../components/home_compo/Hero"
import Navbar from "../components/home_compo/Navbar"
import VoiceFeature from "../components/home_compo/VoiceFeature"

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-100 min-h-screen overflow-hidden">
        <Hero />
        <DesktopFeature />
        <VoiceFeature />
      </div>
    </div>
  )
}

export default Home