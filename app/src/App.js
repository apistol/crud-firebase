import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from "./components/Login"
import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import Home from "./components/Home"

//Route 
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  const [state, setState] = useState();
  //  https://reactrouter.com/docs/en/v6/getting-started/overview

  return (
    <div>
      
      <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            {/* {!state.isLoggedIn && <Route path="/login" element={<Login/>}/>} */}
            {/* <Route path="/register" element={<Register/>}/>
            // <Route path="/users" element={<Home/>}/>*/}
            
            </Routes> 
         </BrowserRouter>  
       
    </div>
  );
}

export default App;
