// foloseste Link din react-router-dom
// si doar afiseaza rutele posibile
import { Link } from 'react-router-dom'
import AppContext from '../context/app-context'
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


 export default function Navabr() {

  const [state, setState] = useContext(AppContext)

  const navigate = useNavigate()
  // 1. butoanele pentru state de isLoggedIn === true , se afiseaza ( Dashboard si Home, eventual si componenta
  // avatar cu initialele userului )
  useEffect(()=> {
    if(!state.isLoggedIn) navigate("/users")
    else navigate("/dashboard")
  }, [state.isLoggedIn])

  return (<div>
    <div id="navbar">

    <h1><Link to="/users"> Link Tree</Link></h1>
    </div>
    <div>
      <nav>
        {state.isLoggedIn && <Link to="/dashboard"> Dashboard </Link>}
        {!state.isLoggedIn && <Link to="/register"> Register </Link>}
        {!state.isLoggedIn && <Link to="/login"> Login </Link>}
        {state.isLoggedIn &&<a onClick={()=>{
          setState({
            isLoggedIn:false,
            user:{},
            navigate:"/login"
          })
        }}> Logout
         </a>}
      </nav>  
    </div>

    </div>

  
    
    
    
  // https://mui.com/material-ui/react-avatar/#main-content

  // 2. butoanele pentru state ul de login, register, afisate doar cand userul nu este logat, Login si Register
  )
}
