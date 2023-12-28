import { Routes, Route } from "react-router-dom"


import './App.css'
import NavBar from "./NavBar/NavBar.jsx";

function App() {
  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
      </>
  )
}

export default App
