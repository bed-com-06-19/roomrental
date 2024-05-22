import { NavLink } from "react-router-dom";
import './App.css';

export const App = () =>{
  return( <div className="flex flex-col  w-full h-screen items-start justify-start">
  <div>My App</div> 
  <div className='flex flex-col'>
    <NavLink to="/home">Go to home page</NavLink>
    <NavLink to="/login">Go to login page</NavLink>
  </div>
  </div>e:\src
);

}

export default App;
