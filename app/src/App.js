import { useState, useEffect } from "react"

import axios from "axios"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

import AppContext from "./context/app-context"
import Profile from "./components/Profile";

axios.defaults.baseURL = "http://localhost:5000/ecommerce-2ebae/us-central1/api"

function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    user: {
      name:"",
      email:""
    },
    socials: []
  })



  return (

    <AppContext.Provider value={[state, setState]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
