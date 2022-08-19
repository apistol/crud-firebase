import axios from "axios"
import {useEffect, useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import useKeyPressed from "../hooks/useKeyPressed"
import AppContext from "../context/app-context"

//Mui
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

export default function Login(props) {  
    
  const [email, setEmail] = useState("salut")
  const [password, setPassword] = useState("vere")
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")
  const enterPressed = useKeyPressed()

  const [appState, setAppState] = useContext(AppContext)

  const navigate = useNavigate()

  const handleChange = () => {
    axios.post("/user/login", {email, password})
    .then((res) => {
        setAppState({
            isLoggedIn: true,
            user: {userId: res.data.result.userId, email:res.data.result.email},
            socials: [...res.data.result.socials]
        })
      setOpen(true)
      setMessage("Succes")
      navigate("/")
      console.log(res)
    })
    .catch((err) => {
      setOpen(true)
      setMessage("Esec")
      console.error(err)
    })
  
  }

  useEffect(() => {
    if(enterPressed) handleChange()
  }, [enterPressed])
  return (
    <div style={{height: "100vh"}}>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  height="100%"
>
  <Grid item xs={4}>
    <Paper elevation={4} style={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"30px"}}>
      <Typography textAlign="center" marginBottom="30px" variant="h3" componenet="h3">
      Login
      </Typography>
      <TextField onChange={(e) => {setEmail(e.target.value)}}id="outlined-basic" label="Username" variant="outlined" value={email}/>
      <TextField type="password" onChange={(e) => {setPassword(e.target.value)}}style={{marginTop:25, marginBottom:25}} id="outlined-basic" label="Password" variant="outlined" value={password} />
      <Button onClick={handleChange} style={{width: 100, margin: "auto"}} variant="contained">Login</Button>
    </Paper>
  </Grid>
</Grid>
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={() => {setOpen(false)}}
  message={message}
/>
    </div>
  )
}
