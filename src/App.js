import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Hostel from "./pages/Hostel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hostel" element={<Hostel />} />
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

