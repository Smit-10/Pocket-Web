import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
