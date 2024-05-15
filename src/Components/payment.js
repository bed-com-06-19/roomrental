import React, { useState } from "react";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({...paymentData, [name]: value });
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Paypal payment Account Details</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardName">Name on Card:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardName"
              onChange={handleChange}
              value={paymentData.cardName}
              required
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardNumber">Enter Card Number:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardNumber"
              onChange={handleChange}
              value={paymentData.cardNumber}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 w-40 rounded-md hover:bg-blue-600"
            type="submit"
            onClick={() => alert('You have successfully booked a room')}
            style={{ marginTop: '-1rem', marginLeft: '1rem' }}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;