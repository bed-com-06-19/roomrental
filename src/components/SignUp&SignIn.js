import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [nationalIdNo, setNationalIdNo] = useState('');
  const [studentIdNo, setStudentIdNo] = useState('');
  const [programOfStudy, setProgramOfStudy] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <div>
        <label>User Name:</label>
        <input type="Text" value={UserName} onChange={(e) => setUserName(e.target.value)} required />
      </div>
      <div>
        <label>Student Id:</label>
        <input type="Text" value={StudentIdNo} onChange={(e) => setStudentIdNumber(e.target.value)} required />
      </div>

      <div>
        <label>National Id:</label>
        <input type="Text" value={NationalIdNo} onChange={(e) => setNationalIdNumber(e.target.value)} required />
      </div>

      <div>
        <label>Program Of Study:</label>
        <input type="Text" value={ProgramOfStudy} onChange={(e) => setProgramOfStudy(e.target.value)} required />
      </div>

      <div>
        <label>Year Of Study:</label>
        <input type="integer" value={YearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>

      <div>
        <label>UserName:</label>
        <input type="UserName" value={Name} onChange={(e) => setUserName(e.target.value)} required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <SignUp />
      <SignIn />
    </div>
  );
};

export default SignUp&SignIn;