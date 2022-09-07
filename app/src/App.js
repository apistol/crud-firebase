import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import AppContext from "./components/context/app-context"





import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000/ecommerce-2ebae/us-central1/api"

function App() {

 
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
