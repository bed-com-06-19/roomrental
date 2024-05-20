import React from 'react';
import hostel1 from '../../Assets/Images/hostel1.jpg';
import backgroundImage from '../../Assets/Images/taiga-ishii-mukO8Po_LZ8-unsplash.jpg';

const FeaturedHostels = () => {
  const hostels = [
    { name: "Hostel A", image: hostel1, price: "$200", distance: "2 miles", location: "City Center", gender: "males" },
    { name: "Hostel B", image: hostel1, price: "$150", distance: "1 mile", location: "Downtown", gender: "males" },
    { name: "Hostel C", image: hostel1, price: "$180", distance: "3 miles", location: "Suburb", gender: "males" },
    { name: "Hostel D", image: hostel1, price: "$220", distance: "2.5 miles", location: "City Outskirts", gender: "females" },
    { name: "Hostel E", image: hostel1, price: "$190", distance: "2 miles", location: "City Center", gender: "females" },
    { name: "Hostel F", image: hostel1, price: "$170", distance: "1.5 miles", location: "Downtown", gender: "males" },
    { name: "Hostel G", image: hostel1, price: "$210", distance: "2.8 miles", location: "Suburb", gender: "females" },
    { name: "Hostel H", image: hostel1, price: "$160", distance: "3 miles", location: "Suburb", gender: "males" },
  ];

  return (
    <div 
      className="relative py-8 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto bg-black bg-opacity-0 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Hostels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {hostels.map((hostel, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
              <img src={hostel.image} alt={hostel.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hostel.name}</h3>
                <p className="text-sm text-gray-300 mb-2">Price: {hostel.price}</p>
                <p className="text-sm text-gray-300 mb-2">Distance: {hostel.distance}</p>
                <p className="text-sm text-gray-300 mb-2">Location: {hostel.location}</p>
                <p className="text-sm text-gray-300 mb-2">Gender: {hostel.gender}</p>
                <button className="bg-gray-600 hover:bg-gray-700 text-[#00df9a] font-semibold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHostels;




