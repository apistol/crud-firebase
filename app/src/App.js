import axios from 'axios';
import { useState } from 'react';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import Navbar from './components/Navbar';
import Home from "./components/Home"

import AppContext from "./context/app-context"

//Route
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//MUIe
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';


// axios.defaults.baseURL="http://localhost:5000/ecommerce-2ebae/us-central1/api"
axios.defaults.baseURL="https://us-central1-ecommerce-2ebae.cloudfunctions.net/api"

function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    user: {
      name:"",
      email:"",
      userId:""
    },
    socials: []
  })


  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            {!state.isLoggedIn && <Route path="/login" element={<Login/>}/>}
            <Route path="/register" element={<Register/>}/>
            <Route path="/users" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
