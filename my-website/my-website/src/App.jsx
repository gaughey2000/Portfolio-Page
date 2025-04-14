import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Blog from './Pages/Blog'
function App() {

  return (
    <div>
    <Navbar />
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>

    </div>
  )
}

export default App
