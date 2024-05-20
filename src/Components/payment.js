import React, { useState } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <>
    <div className="w-full max-w-md flex flex-col items-center justify-center bg-black-100 ">
      <div className="flex justify-center mb-8">
        <img src="images/paypal.jfif" alt="PayPal Logo" className="h-16 md:h-24 lg:h-16 xl:h-40 w-32" />
        <img src="images/mpamba.jfif" alt="PayPal Logo" className="h-16 md:h-24 lg:h-16 xl:h-40 w-32" />
        <img src="images/airtelmoney.jfif" alt="PayPal Logo" className="h-16 md:h-24 lg:h-32 xl:h-40 w-32" />
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>
        <ul class="list-none">
    <li class="mb-2">
        <input type="radio" id="mpamba" name="payment" value="mpamba" class="mr-2"/>
        <label for="mpamba">Mpamba</label>
    </li>
    <li class="mb-2">
        <input type="radio" id="airtel_money" name="payment" value="airtel_money" class="mr-2"/>
        <label for="airtel_money">Airtel Money</label>
    </li>
    <li>
        <input type="radio" id="paypal" name="payment" value="paypal" class="mr-2"/>
        <label for="paypal">PayPal</label>
    </li>
</ul>

      </div>

      <form className="flex flex-col gap-4 bg-pink-100 rounded-lg p-8 shadow-lg">
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardName">Cardhorder Name:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardName" placeholder="Rodrick Jere"
              type="text"
              onChange={handleChange}
              value={paymentData.cardName}
              required
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="cardNumber">CardHolder Number:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="cardNumber" placeholder="0000 0000 0000"
              type="text"
              onChange={handleChange}
              value={paymentData.cardNumber}
          required
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700" htmlFor="password">password:</label>
          </div>
          <div className="w-2/3">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              name="password" placeholder="Enter your card password"
              type="password"
              onChange={handleChange}
              value={paymentData.password}
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
    </>
  );
};

export default Payment;
