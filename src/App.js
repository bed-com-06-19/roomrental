import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
///import Home from "./pages/Home";
import Hostel from "./pages/Hostel";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import Rooms from "./pages/Rooms";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route index element ={ <Home/>} />
//       <Route path="/Home" element ={ <Home/>} />
//       <Route path="/Hostels" element ={ <Hostels/>} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
