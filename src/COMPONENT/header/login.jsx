import React from "react";
// import './login.css';
import MYBACKGROUND from  '../../COMPONENT/assets/an old telephon with rotary dial.jpeg';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{MYBACKGROUND:  `url(${MYBACKGROUND})`}}>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-8">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-gray-700">LOGIN</div>
        </div>

        <div className="mb-4">
          <div className="text-gray-700 mb-2">enter email or phone#</div>
          <div className="mb-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-gray-700 mb-2">enter your password</div>
          <div className="mb-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            Login
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
           Create Account
          </div>
        </div>
        <div className="text-center text-sm text-blue-500 hover:text-blue-800">
          forgot password
        </div>
      </div>
    </div>
  );
};

export default Login;
