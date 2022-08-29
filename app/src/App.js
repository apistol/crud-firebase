import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from "./components/Login"
import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import Home from "./components/Home"
import Landing from "./components/Landing"

//Route 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppContext from './context/app-context';
axios.defaults.baseURL = "http://localhost:5000/ecommerce-2ebae/us-central1/api"
function App() {


  const [state, setState] = useState({
    isLoggedIn: false,
    user: {
      userId: "",
      email: "",
      avatarUrl: ""
    },
    socials: [],
    messages:""
  });


  return (
    <div>
      <AppContext.Provider value={"Robert"}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {!state?.isLoggedIn && <Route path="/login" element={<Login />} />}
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
