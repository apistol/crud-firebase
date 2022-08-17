import './App.css';
import axios from 'axios';
import { useState } from 'react';

//MUIe
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleChange = () => {
    debugger
    axios.post("http://localhost:5000/ecommerce-2ebae/us-central1/api/users", {email, password})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  
  }

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
      <TextField onChange={(e) => {setEmail(e.target.value)}}id="outlined-basic" label="Username" variant="outlined" />
      <TextField onChange={(e) => {setPassword(e.target.value)}}style={{marginTop:25, marginBottom:25}} id="outlined-basic" label="Password" variant="outlined" />
      <Button onClick={handleChange} style={{width: 100, margin: "auto"}} variant="contained">Login</Button>
    </Paper>
  </Grid>
</Grid>
    </div>
  );
}

export default App;
