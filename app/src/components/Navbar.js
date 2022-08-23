// import {useState} from 'react'
// import axios from "axios"
import { Link } from "react-router-dom"
import AppContext from "../context/app-context"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {

  const [appState, setAppState] = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(!appState.isLoggedIn) navigate("/users")
    else navigate("/dashboard")
  }, [appState.isLoggedIn])

  return (<div>

    <div id="navbar">
      <div>

        <h1><Link style={{color: "black", textDecoration:"none", marginLeft: 30}}to="/users"> Link Tree</Link></h1>

      </div>
        <div>
          <nav >
            {appState.isLoggedIn && <Link to="/dashboard" style={{ color: "black", marginLeft: 10, textDecoration:"none", fontSize: 22}}>Dashboard</Link>}
            {!appState.isLoggedIn && <Link style={{ color: "black", marginLeft: 25, textDecoration:"none", fontSize: 22 }} to="/register">Register</Link>}
            {!appState.isLoggedIn && <Link style={{ color: "black", marginLeft: 25, textDecoration:"none", fontSize: 22, marginRight: 30 }} to="/login">Login</Link>}
            {appState.isLoggedIn && <a onClick={() => {
              setAppState({
                isLoggedIn: false,
                user: {},
                socials: []})
                navigate("/login")
              }} style={{ color: "black", marginLeft: 25, textDecoration:"none", fontSize: 22, marginRight: 30 }} >Logout</a>}
          </nav>
        </div>

    </div>
      <pre> {JSON.stringify(appState, 2, 1)}</pre>
              </div>
  )
}



