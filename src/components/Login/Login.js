import React from "react";
import MYBACKGROUND from "../../Assets/Images/Vintagedeskphone.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${MYBACKGROUND})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-2xl bg-black bg-opacity-80 shadow-md rounded-lg px-8 py-12">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-blue-700">LOGIN</div>
        </div>
        <div className="mb-6">
          <div className="text-gray-700 mb-2">Enter email or phone#</div>
          <div className="mb-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-gray-700 mb-2">Enter your password</div>
          <div className="mb-4">
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            Login
          </div>
          <Link to="/SignUp">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer">
              Create Account
            </div>
          </Link>
        </div>
        <div className="text-center text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
          Forgot password
        </div>
      </div>
    </div>
  );
};

export default Login;
