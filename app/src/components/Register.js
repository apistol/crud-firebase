import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
//import useKeyPressed from "../hooks/useKeyPressed"
import AppContext from "../context/app-context"

//Mui

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

export default function Register() {

const [appState, setAppState] = useContext(AppContext)
const {name:[name,setName],email:[email, setEmail],password:[password, setPassword]} = useState()
  // 1. state ul pentru name, email si parola, sa fie intr-o singura variabila
  // ex: useState({ name: ... , email: ... parola:...})
  const navigate = useNavigate()
 // 2 functia de handleRegister

 const handleChange = () => {
  axios.post("user/register", {name, email, password })
      .then((res) => {
           setAppState({
               isLoggedIn: true,
               user: {
                   name: res.data.result.name,
                   email: res.data.result.email,
                   userId: res.data.result.userId
               }})
      navigate("/dashboard")    
      })
      .catch((err) => {
          console.log(err)
      })
  // folosesti axios, pentru a apela endpoint-ul, 


    // in caz de succes => redirect catre dashboard 
    // importi din react router dom   import { useNavigate } from "react-router-dom";
    // dupa il initializez cu  const navigate = useNavigate()
    // navigate("/dashboard")


    // in caz de eroare => o afisezi in console


    // axios.metodaTa( arg1 , arg2 - doar daca e un post sau put ).then().catch()
    // endpoint: "/register"
    // metoda: POST
    // argumentul requestului 
    // {
    //     email: "robert@gmail.com",
    //     name:"",
    //     password: "123456"
    // }
    // returneaza {
    //     result:{
    //         email:"",
    //         name:"",
    //         userId:""
    //     }
    // }
  return (
     <div>

            {
                <Grid container direction="row" justifyContent="center" alignItems="center" height="80%">
                    <Grid item xs={4}>
                        <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }} >
                            <Typography textAlign="center" marginBottom="30px" variant="h3" componenet="h3">
                                Register
                            </Typography>
                            <TextField value={name} onChange={(e) => { setName(e.target.value) }} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="Email" variant="outlined" />
                            <TextField value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} style={{ marginTop: 25, marginBottom: 25 }} id="outlined-basic" label="Password" variant="outlined" />
                            <Button onClick={handleChange} style={{ width: 100, margin: "auto" }} variant="contained">Submit</Button>
                        </Paper>
                    </Grid>
                </Grid>
}
            
        </div>
    )
}
  
}
