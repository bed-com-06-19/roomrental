
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {                      
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='Home' element={<LandingPage/>}/>
        {/* <Route path='hosterls' element={<LandingPage/>}/> */}
      </Routes>
    </BrowserRouter>

// import React from "react";

// function App() {
//   return (
//     <div className="flex flex-row w-">
    
//       My app
//     </div>
// >>>>>>> 44003ae2a6412671c00009c026ddd90329e43cfd
  );
}

export default App;
