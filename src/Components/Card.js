import React from "react";

function Card({ item }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div
            key={val.id}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="card-img-top text-center">
              <img src={val.img} alt="#" className="w-75" />
            </div>
            <div className="w-full h-full rounded-xl ">
              <div className="text-xl font-semibold mb-2">{val.type}</div>
              <div className="text-sm text-gray-300 mb-2">{val.price}</div>
              <div className="text-sm text-gray-300 mb-2">{val.floor}</div>
              <div className="text-sm text-gray-300 mb-2">{val.position}</div>
              <div className="text-sm text-gray-300 mb-2">{val.contained}</div>
              <button className="bg-gray-600 hover:bg-gray-700 text-[#00df9a] font-semibold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

// import React from 'react';

// const Card = ({ items }) => {
//   return (
//     <div className="row">
//       {items.map((item) => (
//         <div className="col-md-4" key={item.id}>
//           <div className="card mb-4">
//             <img src={item.img} className="card-img-top" alt={item.type} />
//             <div className="card-body">
//               <h5 className="card-title">{item.type}</h5>
//               <p className="card-text">Price: ${item.price}</p>
//               <p className="card-text">Floor: {item.floor}</p>
//               <p className="card-text">Position: {item.position}</p>
//               <p className="card-text">Contained: {item.contained}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
