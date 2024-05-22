import React from "react";
import Authentication from './components/Authentication';
import 'tailwindcss/tailwind.css';
import './index.css';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-center mb-3">You Are Welcome</h1>
        <h2 className="text-2xl text-center mb-6">Sign In or Sign Up</h2> 
        <div>
          <Authentication />
        </div>
      </div>
    </div>
  );
}

export default App;