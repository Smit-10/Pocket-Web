import DesktopFeature from "../components/home_compo/DesktopFeature"
import Hero from "../components/home_compo/Hero"
import Navbar from "../components/home_compo/Navbar"
import Features from '../components/home_compo/Features'
import VoiceFeature from "../components/home_compo/VoiceFeature"
import HowItWorks from "../components/home_compo/HowItWorks"
import UseCases from "../components/home_compo/UseCases"

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-100 min-h-screen overflow-hidden">
        <Hero />
        <Features/>
        <DesktopFeature />
        <VoiceFeature />
        <HowItWorks />
        <UseCases />
      </div>
    </div>
  )
}

export default Home