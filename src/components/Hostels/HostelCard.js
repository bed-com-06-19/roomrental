import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import hostel1 from '../../Assets/Images/hostel1.jpg';
import backgroundImage from '../../Assets/Images/taiga-ishii-mukO8Po_LZ8-unsplash.jpg';

const HostelCard = ({ name, image, distance, price, location, gender, rating }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="w-full md:h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm mb-2">Distance from Campus: {distance}</p>
        <p className="text-sm mb-2">Price From: {price}</p>
        <p className="text-sm mb-2">Location: {location}</p>
        <p className="text-sm mb-2">Gender: {gender}</p>
        <div className="flex items-center mb-2">
          <p className="text-sm mr-2">Rating:</p>
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
        <button className="bg-gray-600 hover:bg-gray-700 text-[#00df9a] font-semibold py-2 px-4 rounded">
          Book
        </button>
      </div>
    </div>
  );
};

const HostelFilter = ({ filters, setFilters, isVisible, toggleVisibility }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className={`absolute right-0 mt-2 w-64 bg-white text-black p-4 rounded-lg shadow-md z-50 ${isVisible ? '' : 'hidden'}`}>
      <h2 className="text-lg font-semibold mb-4">Filter Hostels</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={filters.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Gender</label>
        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          <option value="males">Males</option>
          <option value="females">Females</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Max Price"
        />
      </div>
    </div>
  );
};

const HardHostelCards = () => {
  const [filters, setFilters] = useState({
    name: '',
    location: '',
    gender: '',
    minPrice: '',
    maxPrice: '',
  });

  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const hostels = [
    { name: "Petite hostel", image: hostel1, distance: "2 miles", price: "40000MWK", location: "City Center", gender: "males", rating: 4 },
    { name: "Petite hostel", image: hostel1, distance: "1 mile", price: "40000MWK", location: "Downtown", gender: "female", rating: 3 },
    { name: "Petite hostel", image: hostel1, distance: "4 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Hostel C", image: hostel1, distance: "5miles", price: "40000MWK", location: "Rual", gender: "males", rating: 5 },
    { name: "Flats hostel", image: hostel1, distance: "3 miles", price: "30000MWK", location: "Town", gender: "males", rating: 5 },
    { name: "Malingu hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Rural", gender: "males", rating: 5 },
    { name: "white house", image: hostel1, distance: "5 miles", price: "20000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Kabwazi hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "mid-rural", gender: "males", rating: 5 },
    { name: "white house", image: hostel1, distance: "3 miles", price: "80000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Ndola hostel", image: hostel1, distance: "1 miles", price: "40000MWK", location: "Downtown", gender: "males", rating: 5 },
    { name: "Kabwazi hostel", image: hostel1, distance: "1 miles", price: "40000MWK", location: "Suburb", gender: "males", rating: 5 },
    { name: "Petite hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "rural", gender: "males", rating: 5 },
  ];

  const filteredHostels = hostels.filter((hostel) => {
    const { name, location, gender, minPrice, maxPrice } = filters;
    return (
      (!name || hostel.name.toLowerCase().includes(name.toLowerCase())) &&
      (!location || hostel.location.toLowerCase().includes(location.toLowerCase())) &&
      (!gender || hostel.gender === gender) &&
      (!minPrice || parseInt(hostel.price.replace('MWK', '')) >= parseInt(minPrice)) &&
      (!maxPrice || parseInt(hostel.price.replace('MWK', '')) <= parseInt(maxPrice))
    );
  });

  return (
    <div className="bg-cover bg-center p-8 relative z-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-75 p-8 rounded-lg relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Available Hostels</h1>
          <div className="relative">
            <button
              className="flex items-center bg-gray-800 text-white p-2 rounded"
              onClick={toggleFilterVisibility}
            >
              <FaFilter className="mr-2" /> Filter
            </button>
            <HostelFilter filters={filters} setFilters={setFilters} isVisible={filterVisible} toggleVisibility={toggleFilterVisibility} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredHostels.map((hostel, index) => (
            <HostelCard
              key={index}
              name={hostel.name}
              image={hostel.image}
              distance={hostel.distance}
              price={hostel.price}
              location={hostel.location}
              gender={hostel.gender}
              rating={hostel.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardHostelCards;

