import { Link } from "react-router-dom"
import AppContext from "./context/app-context"
import Avatar from '@mui/material/Avatar';
import store from "../redux"

export default function Navbar() {

  const handleLogout = () => {
    store.dispatch({
      type:"LOGOUT",
      payload:{
        isLoggedIn: false,
        user: {
          email: "",
          name: ""
        },
        socials: []
      }
    })
  }


  return (
    <div className="nav">
      <h1>Link Tree</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>

        <Avatar sx={{ bgcolor: "#eabf17" }}>MA</Avatar>

        <a onClick={handleLogout}>Log Out </a>


      </nav>


      <pre>{JSON.stringify(store.getState(), 2, 1)}</pre>

    </div>
  )
}
