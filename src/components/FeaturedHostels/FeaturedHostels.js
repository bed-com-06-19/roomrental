import React from 'react';
import hostel1 from '../../Assets/Images/hostel1.jpg';
import backgroundImage from '../../Assets/Images/taiga-ishii-mukO8Po_LZ8-unsplash.jpg';
import servicesImage from '../../Assets/Images/our service2.jpg';

const FeaturedHostels = () => {
  const hostels = [
    { name: "Malingu hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "Rural", gender: "males" },
    { name: "white house", image: hostel1, distance: "5 miles", price: "20000MWK", location: "Suburb", gender: "males" },
    { name: "Kabwazi hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "mid-rural", gender: "males" },
    { name: "white house", image: hostel1, distance: "3 miles", price: "80000MWK", location: "Suburb", gender: "males" },
    { name: "Ndola hostel", image: hostel1, distance: "1 miles", price: "40000MWK", location: "Downtown", gender: "males" },
    { name: "Kabwazi hostel", image: hostel1, distance: "1 miles", price: "40000MWK", location: "Suburb", gender: "males" },
    { name: "Kabwazi hostel", image: hostel1, distance: "1 miles", price: "40000MWK", location: "Suburb", gender: "males" },
    { name: "Petite hostel", image: hostel1, distance: "3 miles", price: "40000MWK", location: "rural", gender: "males" },
  ];

  return (
    <div 
      className="relative py-8 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto bg-black bg-opacity-25 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Hostels</h2>
        <h4 className="text-3x font-bold mb-8 text-center">Get the top best-rated hostels which are exclusively comfortable and offer the best service.</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {hostels.map((hostel, index) => (
            <div key={index} className="bg-black text-white rounded-lg overflow-hidden shadow-md">
              <img src={hostel.image} alt={hostel.name} className="w-full h-48 object-cover" />
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
        <div className="bg-black bg-opacity-50 p-6 rounded-lg flex items-center">
          <div className="w-full md:w-1/2">
            <img src={servicesImage} alt="Our Services" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Our Services</h3>
            <p className="text-center md:text-left text-gray-300 mb-4">
              At RoomRental, we offer a range of services to ensure your stay is as comfortable and convenient as possible:
            </p>
            <ul className="list-disc list-inside text-center md:text-left text-gray-300 space-y-2">
              <li>24/7 Customer Support</li>
              <li>Online Booking and Payment</li>
              <li>Flexible Cancellation Policies</li>
              <li>Verified Hostels with Reviews</li>
              <li>Special Discounts for Long-term Stays</li>
              <li>Personalized Hostel Recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHostels;






