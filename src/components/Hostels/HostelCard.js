import React, { useState } from "react";
import hostel1 from "../../Assets/Images/hostel1.jpg";
import backgroundImage from "../../Assets/Images/hostel_dark.jpg";
import servicesImage from "../../Assets/Images/thank.jpg";
import { Link } from "react-router-dom";

const HostelCard = ({
  name,
  image,
  distance,
  BookingFee,
  location,
  gender,
  rating,
}) => {
  return (
    <div className="bg-black bg-opacity-50 text-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
      <div className="w-full md:h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm mb-2">Distance from Campus: {distance}</p>
        <p className="text-sm mb-2">BookingFee From: {BookingFee}</p>
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
        <div className="flex justify-between items-center">
          <Link to="/Rooms">
            <button className="bg-gray-600 hover:bg-gray-700 text-[#00df9a] font-semibold py-2 px-4 rounded">
              Book
            </button>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#00df9a] hover:text-[#00c78a] cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const HardHostelCards = () => {
  const [filter, setFilter] = useState("all");

  const hostels = [
    {
      name: "Petite hostel",
      image: hostel1,
      distance: "2 miles",
      BookingFee: "40000MWK",
      location: "City Center",
      gender: "males",
      rating: 4,
    },
    {
      name: "Petite hostel",
      image: hostel1,
      distance: "1 mile",
      BookingFee: "40000MWK",
      location: "Downtown",
      gender: "females",
      rating: 3,
    },
    {
      name: "Petite hostel",
      image: hostel1,
      distance: "4 miles",
      BookingFee: "40000MWK",
      location: "Suburb",
      gender: "males",
      rating: 5,
    },
    {
      name: "Hostel C",
      image: hostel1,
      distance: "5miles",
      BookingFee: "40000MWK",
      location: "Rural",
      gender: "males",
      rating: 5,
    },
    {
      name: "Flats hostel",
      image: hostel1,
      distance: "3 miles",
      BookingFee: "30000MWK",
      location: "Town",
      gender: "males",
      rating: 5,
    },
    {
      name: "Malingu hostel",
      image: hostel1,
      distance: "3 miles",
      BookingFee: "40000MWK",
      location: "Rural",
      gender: "males",
      rating: 5,
    },
    {
      name: "white house",
      image: hostel1,
      distance: "5 miles",
      BookingFee: "20000MWK",
      location: "Suburb",
      gender: "males",
      rating: 5,
    },
    {
      name: "Kabwazi hostel",
      image: hostel1,
      distance: "3 miles",
      BookingFee: "40000MWK",
      location: "mid-rural",
      gender: "males",
      rating: 5,
    },
    {
      name: "white house",
      image: hostel1,
      distance: "3 miles",
      BookingFee: "80000MWK",
      location: "Suburb",
      gender: "males",
      rating: 5,
    },
    {
      name: "Ndola hostel",
      image: hostel1,
      distance: "1 miles",
      BookingFee: "40000MWK",
      location: "Downtown",
      gender: "males",
      rating: 5,
    },
    {
      name: "Kabwazi hostel",
      image: hostel1,
      distance: "1 miles",
      BookingFee: "40000MWK",
      location: "Suburb",
      gender: "males",
      rating: 5,
    },
    {
      name: "Petite hostel",
      image: hostel1,
      distance: "3 miles",
      BookingFee: "40000MWK",
      location: "Rural",
      gender: "males",
      rating: 5,
    },
  ];

  const filteredHostels = hostels.filter((hostel) => {
    return filter === "all" || hostel.gender === filter;
  });

  return (
    <div
      className="bg-cover bg-center p-8 relative z-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-20 p-8 rounded-lg relative z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Available Hostels
        </h1>
        <h3 className="text-3x font-bold text-white text-center mb-4">
          The most comfortable hostel which offers best services you can ever
          find!
        </h3>
        <div className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded ${
              filter === "all"
                ? "bg-gray-700 text-[#00df9a]"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded ${
              filter === "males"
                ? "bg-gray-700 text-[#00df9a]"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
            onClick={() => setFilter("males")}
          >
            Males
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded ${
              filter === "females"
                ? "bg-gray-700 text-[#00df9a]"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
            onClick={() => setFilter("females")}
          >
            Females
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredHostels.map((hostel, index) => (
            <HostelCard
              key={index}
              name={hostel.name}
              image={hostel.image}
              distance={hostel.distance}
              BookingFee={hostel.BookingFee}
              location={hostel.location}
              gender={hostel.gender}
              rating={hostel.rating}
            />
          ))}
        </div>
      </div>
      <div className="bg-black bg-opacity-20 p-6 rounded-lg flex items-center">
        <div className="w-full md:w-1/2">
          <img
            src={servicesImage}
            alt="Our Services"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <p className="text-center md:text-left text-gray-300 mb-4">
            The best place to find your Comfortable Acccomodations. We only
            provide the best hostels and offer uur customers the best services.
          </p>
          <ul className="list-disc list-inside text-center md:text-left text-gray-300 space-y-2">
            <h1 className="text-4xl">
              THANK YOU!! <br></br>For Visiting us!
            </h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HardHostelCards;
