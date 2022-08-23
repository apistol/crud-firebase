// import {useState} from 'react'
// import axios from "axios"
import { Link } from "react-router-dom"
import AppContext from "../context/app-context"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {

  const [appState, setAppState] = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    // if(!appState.isLoggedIn) navigate("/login")
  }, [appState.isLoggedIn])

  return (
    <div >
      <div style={{ display: "flex" }}>

        <h1>Link Tree</h1>

        <div style={{ justifyContent: "center", alignItems: "end" }}>
          <nav >
            {appState.isLoggedIn && <Link to="/" style={{ marginLeft: 10 }}>Dashboard</Link>}
            {!appState.isLoggedIn && <Link style={{ marginLeft: 10 }} to="/register">Register</Link>}
            {!appState.isLoggedIn && <Link style={{ marginLeft: 10 }} to="/login">Login</Link>}
            {appState.isLoggedIn && <a onClick={() => {
              setAppState({
              isLoggedIn: false,
              user: {},
              socials: []})
              navigate("/login")
              }} style={{ marginLeft: 10 }} >Logout</a>}
          </nav>
        </div>

      </div>
      <pre> {JSON.stringify(appState, 2, 1)}</pre>
    </div>
  )
}



