import {Link, useNavigate} from "react-router-dom"
import AppContext from "../context/app-context"
import {useContext, useEffect} from "react"
import Avatar from '@mui/material/Avatar';

export default function Navbar() {

  const [state, setState] = useContext(AppContext)

  
  const navigate = useNavigate()

  useEffect(() => {
    if(!state.isLoggedIn) navigate("/login")
  }, [])

  return (
    <div className="nav">
        <h1>Link Tree</h1>
        <nav>
            {state.isLoggedIn && <Link to="/">Dashboard</Link>}
            {!state.isLoggedIn && <Link to="/login">Login </Link>}
            {!state.isLoggedIn && <Link to="/register">Register </Link>}
            {state.isLoggedIn && <div className="profileBtn"><Link to="/login">Profile <Avatar sx={{ bgcolor: "#eabf17" }}>AP</Avatar></Link></div>}
        </nav>
    </div>
  )
}
