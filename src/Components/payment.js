
import React, { useState } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    phoneNum: '',
    cardPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <div className="bg-white mt-20">
      <div className="flex justify-center items-center mt-16">
        <img src="images/paypal.jfif" alt="PayPal Logo" className="w-32 h-40 mx-4" />
        <img src="images/mpamba.jfif" alt="MPamba Logo" className="w-32 h-40 mx-4" />
        <img src="images/airtelmoney.jfif" alt="Airtel Money Logo" className="w-32 h-40 mx-4" />
      </div>

      <div className="bg-pink-100 max-w-md p-8 rounded-lg shadow-lg mx-auto mt-8">
        <h3 className="text-center text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>

        <ul className="list-none">
          <li className="mb-4">
            <input type="radio" name="payment" value="mpamba" />
            <label htmlFor="mpamba" className="ml-2">Mpamba</label>
          </li>
          <li className="mb-4">
            <input type="radio" name="payment" value="airtel" />
            <label htmlFor="airtel" className="ml-2">Airtel Money</label>
          </li>
          <li>
            <input type="radio" name="payment" value="paypal" />
            <label htmlFor="paypal" className="ml-2">PayPal</label>
          </li>
        </ul>

        <div className="mt-8">
          <label htmlFor="phoneNum" className="block text-gray-700 mb-2">Phone Number:</label>
          <input
            type=""
            name="phoneNum"
            placeholder="088 863 9011"
            value={paymentData.phoneNum}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
            maxLength={10}
          />

          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input
           placeholder="bsc-com-06-21@unima.ac.mw"
            type="email"
            name="email"
            value={paymentData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
          />

          <label htmlFor="password" className="block text-gray-700 mb-2">Password (Max 8 characters):</label>
          <input
            type="password"
            name="password"
            value={paymentData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
            maxLength={8}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
            onClick={() => alert('Room booked successfully!')}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
