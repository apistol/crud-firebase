// import {useState} from 'react'
// import axios from "axios"
import {Link} from "react-router-dom"
import AppContext from "../context/app-context"
import {useContext} from "react"

export default function Navbar() {

    const [appState] = useContext(AppContext)
  return (
    <div >
      <div style={{display:"flex"}}>

      <h1>Link Tree</h1>

      <div style={{justifyContent:"center", alignItems:"end"}}>
        <nav >
          <Link to="/" style={{marginLeft:10}}>Dashboard</Link>
          {!appState.isLoggedIn &&<Link style={{marginLeft:10}} to="/register">Register</Link>}
          {!appState.isLoggedIn && <Link style={{marginLeft:10}} to="/login">Login</Link>}
          {appState.isLoggedIn && <Link style={{marginLeft:10}} to="/logout">Logout</Link>}
        </nav>
      </div>

      </div>
      <pre> {JSON.stringify(appState,2 ,1)}</pre>
    </div>
  )
}



