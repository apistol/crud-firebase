import axios from "axios"
import {useEffect, useState, useContext} from "react"


//Mui
////import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

//import Snackbar from '@mui/material/Snackbar';

export default function Login(props0) {

    // https://mui.com/material-ui/getting-started/overview/
    const [email, setEmail] = useState("robert@gmail.com")
    const[password, setPassword] = useState()

// 1 state ul tau

// 2 functia de handleLogin

    // folosesti axios, pentru a apela endpoint-ul, 


    // in caz de succes => redirect catre dashboard 
    // importi din react router dom   import { useNavigate } from "react-router-dom";
    // dupa il initializez cu  const navigate = useNavigate()
    // navigate("/dashboard")


    // in caz de eroare => o afisezi in console


    // axios.metodaTa( arg1 , arg2 - doar daca e un post sau put ).then().catch()
    // endpoint: "/login"
    // metoda: POST
    // argumentul requestului 
    // {
    //     email: "robert@gmail.com",
    //     password: "123456"
    // }
    // returneaza {
    //     result:{
    //         email:"",
    //         password:"",
    //         socials:"",
    //         userId:""
    //     }
    // }


    return (
        <div>

        {
        <Grid container direction="row" justifyContent="center" alignItems="center" height="80%">
        <Grid item xs={4}>
        <Paper>
        <Typography>Login</Typography>
        <TextField></TextField>
        <TextField></TextField>
        <Button></Button>
        </Paper>
        </Grid>
        </Grid>
        
        /*
         

        - O structura de <Grid>, in care copilul ,
        sa aiba latimea de 4 unitati pe desktop si 12 pe mobil

        - Doua text field uri, care sa fie legate la state ul intern
        al componentei ( folosesti useState ) pentru email si password

        - o componenta de submit <Button> care pe on click, sa trigeruiasca functia 
        de handleLogin

        */}
            login
        </div>
    )
}