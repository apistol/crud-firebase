import { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import AppContext from "../context/app-context"
import {useNavigate} from "react-router-dom"

export default function Register() {

  const [appState, setAppState] = useContext(AppContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  const handleChange = () => {
    axios.post("user/register", { name, email, password })
      .then((res) => {
        debugger
        setAppState({
          ...appState,
          isLoggedIn: true,
          user: {
            name: res.data.name,
            email: res.data.email,
            userId: res.data.userId
          }})
          navigate("/dashboard")
        })
      .catch((err) => {
        console.log(err)
      })
  }
  // cand faci axios.post, primul parametru este URL: "/user/register"  ul si al doilea req.body-ul
  // un obiecr de forma
  // {
  //  name: ...
  //  email: ...
  //  password: ...
  // }
  // 
  // const [open, setOpen] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={4}>
          <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }}>
            <Typography textAlign="center" marginBottom="30px" variant="h3" componenet="h3">
              Register
            </Typography>
            <TextField onChange={(e) => {setName(e.target.value)}}label="Username" variant="outlined" />
            <TextField onChange={(e) => {setEmail(e.target.value)}}style={{ marginTop: 25 }} label="Email" variant="outlined" />
            <TextField onChange={(e) => {setPassword(e.target.value)}}type="password" style={{ marginTop: 25, marginBottom: 25 }} label="Password" variant="outlined" />
            <Button onClick={() => { handleChange() }} style={{ width: 100, margin: "auto" }} variant="contained">Register</Button>
          </Paper>
        </Grid>
      </Grid>
      {/* <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => {setOpen(false)}}
  message="sa"
/> */}
    </div>
  )
}
