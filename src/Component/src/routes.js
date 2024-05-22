import {createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element : <App/>
    },
    {
        path: '/home',
        element : <Home/>
    },
    {
        path: '/login',
        element : <Login/>
    },
]);

export default router; 