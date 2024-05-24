import React, { useState } from "react";
//import MYBACKGROUND from '../../Components/Assets/PAYBACKGROUND.jpg';

const Payments = () => {
  const [paymentData, setPaymentData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    payment: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = () => {
    if (Object.values(paymentData).every((val) => val !== "")) {
      alert("Room booked successfully!");
    } else {
      //please fill in all the details
      alert("Room booked successfully!");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center mt-24 ">
        <img
          src="/images/paypal.jfif"
          alt="PayPal Logo"
          className="w-32 h-40 mx-4 rounded-md"
        />
        <img
          src="/images/mpamba.jfif"
          alt="MPamba Logo"
          className="w-32 h-40 mx-4 rounded-md"
        />
        <img
          src="/images/airtelmoney.jfif"
          alt="Airtel Money Logo"
          className="w-32 h-40 mx-4 rounded-md"
        />
      </div>

      <div className=" red-100 max-w-md p-8 rounded-lg shadow-lg mx-auto mt-8">
        <h3 className="text-center text-3xl font-bold mb-8 text-white">
          {" "}
          PAYMENT DETAILS
        </h3>

        <ul className="list-none">
          <li className="mb-4">
            <input
              type="radio"
              name="payment"
              value="mpamba"
              onChange={handleChange}
            />
            <label htmlFor="mpamba" className="ml-2 text-white">
              Mpamba
            </label>
          </li>
          <li className="mb-4">
            <input
              type="radio"
              name="payment"
              value="airtel"
              onChange={handleChange}
            />
            <label htmlFor="airtel" className="ml-2 text-white">
              Airtel Money
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="payment"
              value="paypal"
              onChange={handleChange}
            />
            <label htmlFor="paypal" className="ml-2 text-white">
              PayPal
            </label>
          </li>
        </ul>

        {paymentData.payment === "paypal" && (
          <div className="mt-8">
            <label htmlFor="name" className="block text-white mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Leo Jamu"
              value={paymentData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="email" className="block text-white mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="bsc-com-06-21@unima.ac.mw"
              value={paymentData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
          </div>
        )}

        {(paymentData.payment === "mpamba" ||
          paymentData.payment === "airtel") && (
          <div className="mt-8">
            <label htmlFor="name" className="block text-white mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Leo Jamu"
              value={paymentData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />

            <label htmlFor="phoneNum" className="block text-white mb-2">
              Phone Number:
            </label>
            <input
              type="number"
              name="phoneNum"
              placeholder="088 863 9011"
              value={paymentData.phoneNum}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={10}
              required
            />

            <label htmlFor="password" className="block text-white mb-2">
              Enter cardPIN:
            </label>
            <input
              type="password"
              name="password"
              value={paymentData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={4}
            />
          </div>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Payments;
