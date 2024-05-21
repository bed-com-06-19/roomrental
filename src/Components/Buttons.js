import React from "react"
import Data from "../Components/Data"

function Buttons ({menuItems, filterItems, setItems})
{
    return(
        <div className="d-flex justify-content-center mb-2">
            {menuItems.map(val => (
                    <button className="btn-grey text-white p-1 px-2 mx-5 btn fw-bold"
                    onClick = {() => filterItems(val)}>

                        {val}
                    </button>))}

                    <button className="btn-grey text-white p-1 px-2 mx-5 btn fw-bold">
                        All
                    </button>
        </div>
    )
}

export default Buttons;


// import React from 'react';

// const Buttons = ({ menuItems, filterItems }) => {
//   return (
//     <div className="d-flex justify-content-center mb-4">
//       {menuItems.map((val, index) => (
//         <button
//           key={index}
//           className="btn btn-grey text-white p-1 px-2 mx-2 btn fw-bold"
//           onClick={() => filterItems(val)}
//         >
//           {val}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Buttons;
