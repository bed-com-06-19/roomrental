import React, { useState } from 'react';

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
    <div className="w-full max-w-md flex flex-col items-center hjustify-center ">
      <div className="flex justify-center mb-8">
  <img src="images/paypal.jfif" alt="PayPal Logo" className="h-16 md:h-24 lg:h-32 xl:h-40" />
</div>

      <div className="text-center">
  <h3 className="text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>
</div>

      <form className="flex flex-col gap-4 bg-white rounded-lg p-8 shadow-lg">
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardName">Cardhorder Name:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardName" placeholder="Rodrick Jere"
              onChange={handleChange}
              value={paymentData.cardName}
              required
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardNumber">Card Number:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardNumber" placeholder="0000 0000 0000"
              onChange={handleChange}
              value={paymentData.cardNumber}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            type="submit"
            onClick={() => alert('You have successfully booked a room')}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
