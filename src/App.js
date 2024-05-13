

import React from "react";
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hostels from "./pages/Hostel";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element ={ <Home/>} />
      <Route path="/Home" element ={ <Home/>} />
      <Route path="/Hostels" element ={ <Hostels/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

