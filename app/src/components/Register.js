import axios from 'axios'
import { useState, useContext } from 'react'
import AppContext from './context/app-context'
import { Grid, TextField, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [state, setState] = useContext(AppContext)


  let navigate = useNavigate()

  const handleSubmit = () => {
    axios
      .post("/user/register", { name, email, password })
      .then((res) => {
        const { name, email, userId } = res.data
        setState({
          isLoggedIn: true,
          user: {
            name,
            email,
            userId
          },
          socials: []
        })
        navigate("/dashboard")
      })
      .catch((err) => {
        alert(err)

      })
  }


  return (
    <div style={{ height: "100vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={"100%"}
      >
        <Grid item xs={12} md={6} lg={4} justifyContent="center" >
          <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }}>
            <Typography textAlign="center" variant="h2" component="h2">
              Register
            </Typography>
            <TextField value={name} onChange={(e) => setName(e.target.value)} label="Nume User" />
            <br />
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
            <br />
            <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
            <br />
            <p style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}> Submit</Button>
            </p>
          </Paper>
        </Grid>
      </Grid>


    </div>
  )
}
