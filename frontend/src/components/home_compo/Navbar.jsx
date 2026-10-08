import Logo from "../logo/Logo"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex gap-8 justify-between border-b border-gray-100 w-full backdrop-blur-md bg-white/60 h-15">
        <div className="p-2 px-6">
            <Logo color={"black"} AIcolor={"[linear-gradient(135deg,#00ffff,#6f3cff,#ff4fd8)]"}/>
        </div>

        <div className="hidden md:flex gap-15 items-center">
            <a href="#features"><div className="cursor-pointer hover:text-purple-700">Features</div></a>
            <a href="#HowItWorks"><div className="cursor-pointer hover:text-purple-700">How it works</div></a>
            <a href="#UseCases"><div className="cursor-pointer hover:text-purple-700">Use Cases</div></a>
        </div>

        <div className="flex gap-3 items-center mr-6">
            <a href="/login"><button className="rounded-xl p-2 cursor-pointer text-bold hover:text-purple-700">Login</button></a>
            <a href="/signup"><button className="m-6 w-25 md:w-fit border-transparent bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg p-2 hover:scale-105 hover:shadow-[0_0_18px_rgba(79,70,229,0.45)]transition-all duration-300 ease-out">Get started</button></a>
        </div>
    </nav>
  )
}

export default Navbar