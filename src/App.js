import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Components/Data";
import Card from "./Components/Card";
// import Gallery from "./Components/Gallery";
// import Rooms from "./Components/Rooms";
import Buttons from "./Components/Buttons";

function App() {
  const [items, setItems] = useState(Data);
  const [filterType, setFilterType] = useState("any"); // Filter criteria

  const filteredItems = items.filter(
    (item) => !filterType || item.type === filterType || "Double Room"
  );

  const filterItems = (filterType) => {
    setItems(
      items.filter(
        (item) => !filterType || item.type === filterType || "Double Room"
      )
    );
  };

  return (
    <>
      <div className="container-fluid bg-blue">
        {/* <Gallery/>
            <Rooms/> */}
        <div className="row">
          <h1 className="Text-center col-12 fw-bold mt-3 mb-5">
            Available Rooms
          </h1>
          {/* <Buttons
            // menuItems ={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          /> */}
          <button onClick={() => setFilterType("cat")} className=" w-[100px]">
            Cat Filter
          </button>
          <Card item={items} />
        </div>
      </div>
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './Components/Data';
// import Card from './Components/Card';
// // import Gallery from './Components/Gallery';
// // import Rooms from './Components/Rooms';
// import Buttons from './Components/Buttons';

// function App() {
//   // Initialize state with the cardData array from Data
//   const [items, setItems] = useState(Data.cardData);

//   // Extract unique menu items from data
//   const menuItems = [...new Set(Data.cardData.map((val) => val.type))];

//   // Filter items based on category
//   const filterItems = (cat) => {
//     if (cat === 'All') {
//       setItems(Data.cardData); // Show all items if 'All' is selected
//     } else {
//       const newItems = Data.cardData.filter((newVal) => newVal.type === cat);
//       setItems(newItems);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <h1 className="text-center col-12 fw-bold mt-3 mb-5">Available Rooms</h1>
//         <Buttons
//           menuItems={['All', ...menuItems]} // Add 'All' option to the menu items
//           filterItems={filterItems}
//         />
//         <Card items={items} /> {/* Pass items as a prop to Card component */}
//       </div>
//     </div>
//   );
// }

// export default App;
