import React, { useState } from 'react';

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', confirmPassword: '',});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = formData;

    if (!isSignIn) {
      if (password !== confirmPassword) {
        return "Passwords don't match!";
      }
      if (password.length < 6 || password.length > 10) {
        return 'Password should be between 6 to 10 characters!';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return 'Invalid email address!';
      }
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    if (isSignIn) {
      console.log('Signing in...', formData.email, formData.password);
    } else {
      console.log('Signing up...', formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="mb-6">
              <input
                type="text"
                name="username"
                placeholder="Enter Your Full Name"
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          )}
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="mb-6">
            <input
               type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          {!isSignIn && (
            <div className="mb-6">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          )}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button type="submit" className="button-primary">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <button
          type="button"
          onClick={() => setIsSignIn(!isSignIn)}
          className="button-secondary mt-4 w-full"
        >
          {isSignIn ? 'Create an Account' : 'Already have an account? Sign In'}
        </button>
      </div>
    </div>
  );
};

export default SignInSignUp;