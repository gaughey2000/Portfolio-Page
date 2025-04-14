import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About'
function App() {

  return (
    <div>
    <Navbar />
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>

    </div>
  )
}

export default App
