import React, { useState } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    phoneNum: '',
    password: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (paymentData.payment) {
      case 'paypal':
        if (paymentData.name !== '' && paymentData.email !== '') {
          alert('Room booked successfully');
        } else {
          alert('Please fill in the missing fields');
        }
        break;
      case 'airtel':
      case 'mpamba':
        if (paymentData.name !== '' && paymentData.phoneNum !== '' && paymentData.password !== '') {
          alert('Room booked successfully');
        } else {
          alert('Please fill in the missing fields');
        }
        break;
      default:
        alert('Please select a payment method');
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <div className="flex justify-center items-center mt-8">
        <img src="/images/paypal.jfif" alt="PayPal Logo" className="w-16 h-20 mx-2" />
        <img src="/images/mpamba.jfif" alt="MPamba Logo" className="w-16 h-20 mx-2" />
        <img src="/images/airtelmoney.jfif" alt="Airtel Money Logo" className="w-16 h-20 mx-2" />
      </div>

      <div className="max-w-md p-8 rounded-lg shadow-lg mx-auto mt-8">
        <h3 className="text-center text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>

        <ul className="list-none">
          <li className="mb-4">
            <input type="radio" name="payment" value="mpamba" onChange={handleChange} />
            <label htmlFor="mpamba" className="ml-2">
              Mpamba
            </label>
          </li>
          <li className="mb-4">
            <input type="radio" name="payment" value="airtel" onChange={handleChange} />
            <label htmlFor="airtel" className="ml-2">
              Airtel Money
            </label>
          </li>
          <li>
            <input type="radio" name="payment" value="paypal" onChange={handleChange} />
            <label htmlFor="paypal" className="ml-2">
              PayPal
            </label>
          </li>
        </ul>

        {paymentData.payment === 'paypal' && (
          <div className="mt-8">
            <label htmlFor="name" className="block text-gray-700 mb-2">
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

            <label htmlFor="email" className="block text-gray-700 mb-2">
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

        {(paymentData.payment === 'mpamba' || paymentData.payment === 'airtel') && (
          <div className="mt-8">
            <label htmlFor="name" className="block text-gray-700 mb-2">
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

            <label htmlFor="phoneNum" className="block text-gray-700 mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNum"
              placeholder="088 863 9011"
              value={paymentData.phoneNum}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={10}
            />
            <label htmlFor="password" className="block text-gray-700 mb-2">
            Enter PIN:
            </label>
            <input
              type='password'
              name="password"
              placeholder="****"
              value={paymentData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={4}
            />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-800 text-white p-2 rounded-md mt-4 w-full"
          >
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
