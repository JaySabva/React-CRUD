import { Routes, Route } from "react-router-dom"

import './App.css'
import NavBar from "./NavBar/NavBar.jsx";
import Registration from "./Registration/Registration.jsx";
import DataView from "./DataView/DataView.jsx";

function App() {
  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/" element={<h1>Home</h1>} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/data-view" element={<DataView />} />
          </Routes>
      </>
  )
}

export default App
