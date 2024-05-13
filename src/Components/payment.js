import React, { useState } from "react";

// This is the main component that renders the payment form.
const Payment = () => {
  // This is a state variable that stores the payment data.
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
  });

  // This is a function that handles changes to the payment data.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  // This is the render method of the component.
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Paypal payment Account Details</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <label className="mr-4" for="cardName">Name on Card:</label>
            <div className="ml-auto">
              <input
                className="border border-gray-300 px-4 py-2 w-64 rounded-md"
                name="cardName"
                onChange={handleChange}
                value={paymentData.cardName}
                required // This is a required field.
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <label className="mr-4" for="cardNumber">Enter Card Number:</label>
            <input
              className="border border-gray-300 px-4 py-2 w-64 rounded-md"
              name="cardNumber"
              onChange={handleChange}
              value={paymentData.cardNumber}
              required // This is a required field.
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 w-40 rounded-md ml-auto hover:bg-blue-600"
              type="submit"
              onClick={() => alert('You have sucesfully booked a room')} // This is an onClick event that displays an alert when the button is clicked.
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
