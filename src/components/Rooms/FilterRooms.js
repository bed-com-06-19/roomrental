import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Single1 from "../../Assets/Images/Single1.jpg";
import backgroundImage from "../../Assets/Images/Background.jpg";
import { Link } from "react-router-dom";

const RoomCard = ({ type, price, view, kind, bookingFee }) => {
  return (
    <div className="bg-black bg-opacity-10 text-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="w-full md:h-48 overflow-hidden">
        <img src={Single1} alt={type} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{type}</h2>
        <p className="text-sm mb-2">Amount: {price}</p>
        <p className="text-sm mb-2">View: {view}</p>
        <p className="text-sm mb-2">Kind: {kind}</p>
        <p className="text-sm mb-2">Booking Fee: {bookingFee}</p>
        <Link to="/Payment">
          <button className="bg-gray-600 hover:bg-blue-700 text-[#00df9a] font-semibold py-2 px-4 rounded">
            Make Payments
          </button>
        </Link>
      </div>
    </div>
  );
};

const RoomFilter = ({ filters, setFilters, isVisible, toggleVisibility }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div
      className={`absolute right-0 mt-2 w-64 bg-white text-black p-4 rounded-lg shadow-md z-50 ${
        isVisible ? "" : "hidden"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Choose Room By: </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Room Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Any</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
          <option value="Triple Room">Triple Room</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">View</label>
        <select
          name="view"
          value={filters.view}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Any</option>
          <option value="Window View">Window View</option>
          <option value="Close to Door">Close to the Door</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Kind</label>
        <select
          name="kind"
          value={filters.kind}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Any</option>
          <option value="Self-Contained">Self Contained</option>
          <option value="Not Self-Contained">Not Self Contained</option>
        </select>
      </div>
    </div>
  );
};

const TheRoomCard = () => {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    view: "",
    kind: "",
    bookingFee: "",
  });

  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const rooms = [
    {
      image: Single1,
      type: "Single Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Double Room",
      price: "MKW 65,000.00",
      view: "Close to Door",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Triple Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Single Room",
      price: "MKW 65,000.00",
      view: "Close to Door",
      kind: "Not Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Double Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Triple Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Not Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Single Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Not Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Double Room",
      price: "MKW 65,000.00",
      view: "Close to Door",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Triple Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Single Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Not Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Double Room",
      price: "MKW 65,000.00",
      view: "Close to Door",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
    {
      image: Single1,
      type: "Triple Room",
      price: "MKW 65,000.00",
      view: "Window View",
      kind: "Self-Contained",
      bookingFee: "MKW 10,000.00",
    },
  ];

  const filteredRooms = rooms.filter((room) => {
    const { type, view, kind } = filters;
    return (
      (!type || room.type === type) &&
      (!view || room.view === view) &&
      (!kind || room.kind === kind)
      //   (!maxPrice || parseInt(room.price.replace('MWK', '')) <= parseInt(maxPrice))
    );
  });

  return (
    <div
      className="bg-cover bg-center p-8 relative z-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" bg-opacity-10 p-8 rounded-lg relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Available Rooms</h1>
          <div className="relative">
            <button
              className="flex items-center bg-gray-800 text-white p-2 rounded"
              onClick={toggleFilterVisibility}
            >
              <FaFilter className="mr-2" /> Filter
            </button>
            <RoomFilter
              filters={filters}
              setFilters={setFilters}
              isVisible={filterVisible}
              toggleVisibility={toggleFilterVisibility}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredRooms.map((room, index) => (
            <RoomCard
              key={index}
              type={room.type}
              price={room.price}
              view={room.view}
              kind={room.kind}
              bookingFee={room.bookingFee}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheRoomCard;
