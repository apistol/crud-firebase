import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';


function App() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")
  

  const handleSubmit = () => {
   
    axios
      .post("http://localhost:5000/ecommerce-2ebae/us-central1/api", { email, password })
      .then((res) => {
        setOpen(true)
        setMessage("Success")
      })
      .catch((err) => {
        console.error(err)
        setOpen(true)
        setMessage("Esec")
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

        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }}>
            <Typography textAlign="center" variant="h2" component="h2">
              Login
            </Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
            <br />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
            <br />
            <Button onClick={handleSubmit} style={{ width: "200px", margin: "auto", }} variant="contained">Submit</Button>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
      />


    </div>
  );
}

export default App;
