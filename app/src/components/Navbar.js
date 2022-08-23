import { Link } from "react-router-dom"
import AppContext from "./context/app-context"
import { useContext } from "react"
import Avatar from '@mui/material/Avatar';


export default function Navbar() {
  const [state, setState] = useContext(AppContext)
  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {
        email: "",
        name: ""
      },
      socials: []
    })
  }


  return (
    <div className="nav">
      <h1>Link Tree</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>

        <Avatar sx={{ bgcolor: "#eabf17" }}>MA</Avatar>

        <a onClick={handleLogout}>Log Out </a>


      </nav>


    </div>
  )
}
