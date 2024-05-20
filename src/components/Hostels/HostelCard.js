import React from 'react';
import hostel1 from '../../Assets/Images/hostel1.jpg';

const HostelCard = ({ name, image, distance, price, location, gender, rating }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="w-full md:h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">Distance from Campus: {distance}</p>
        <p className="text-sm text-gray-600 mb-2">Price From: {price}</p>
        <p className="text-sm text-gray-600 mb-2">Location: {location}</p>
        <p className="text-sm text-gray-600 mb-2">Gender: {gender}</p> {/* Displaying gender */}
        <div className="flex items-center mb-2">
          <p className="text-sm text-gray-600 mr-2">Rating:</p>
          <div className="flex">
            {[...Array(rating)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a.75.75 0 0 1 .696.471l1.882 4.815 5.294.386a.75.75 0 0 1 .416 1.279l-4.252 3.595 1.284 5.198a.75.75 0 0 1-1.15.837L10 15.785l-4.236 2.382a.75.75 0 0 1-1.15-.837l1.284-5.198-4.252-3.595a.75.75 0 0 1 .416-1.279l5.294-.386L9.304 2.47A.75.75 0 0 1 10 2z"
                />
              </svg>
            ))}
          </div>
        </div>
        <button className="bg-gray-500 hover:bg-gray-600 text-[#00df9a] font-semibold py-2 px-4 rounded">
          Book
        </button>
      </div>
    </div>
  );
};

const HardHostelCards = () => {
  
  const hostels = [
    { name: "Hostel A", image: hostel1, distance: "2 miles", price: "40000MWK", location: "City Center", gender: "males", rating: 4 },
    { name: "Hostel B", image: hostel1, distance: "1 mile", price: "40000MWK", location: "Downtown", gender: "males", rating: 3 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
  
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {hostels.map((hostel, index) => (
        <HostelCard
          key={index}
          name={hostel.name}
          image={hostel.image}
          distance={hostel.distance}
          price = {hostel.price}
          location={hostel.location}
          gender={hostel.gender}
          rating={hostel.rating}
        />
      ))}
    </div>
  );
};

export default HardHostelCards;

