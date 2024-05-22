import { Fragment } from "react";
import SignIn from '/components/signIn/';
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

    export default SignIn();
  };