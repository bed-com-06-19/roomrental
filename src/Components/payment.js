import React, { useState } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <div>
      <h3>Paypal payment Account Details</h3>
      <form>
        <div>
          <label htmlFor="cardName">Name on Card:  </label>
          <input type="text" name="cardName" onChange={handleChange} value={paymentData.cardName} />
        </div>
        <div>
          <label htmlFor="cardNumber">Enter Card Number: </label>
          <input type="text" name="cardNumber" onChange={handleChange} value={paymentData.cardNumber} />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Payment;
