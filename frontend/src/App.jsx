import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
import Home from "./pages/Home"
import Docs from "./pages/Docs"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/docs" element={<Docs/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
