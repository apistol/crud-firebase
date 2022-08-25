import axios from "axios"
import {useEffect, useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import useKeyPressed from "../hooks/useKeyPressed"
import AppContext from "../context/app-context"

//Mui
////import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

//import Snackbar from '@mui/material/Snackbar';

export default function Login(props) {

    // https://mui.com/material-ui/getting-started/overview/
    const [email, setEmail] = useState("robert@gmail.com")
    const [password, setPassword] = useState()
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const enterPressed = useKeyPressed()
// 1 state ul tau
    const [ _ , setAppState] = useContext(AppContext) //de ce se foloseste "_"?
    const navigate = useNavigate()
// 2 functia de handleLogin
    const handleChange = () => {
        axios.post("/user/login",{email, password})
        .then((res) => {
            setAppState({
                isLoggedIn: true,
                user:{
                    userId:res.data.result.userId,
                    email:res.data.result.email,
                    avatarUrl:res.data.result.avatarUrl
                },
                socials: [...res.data.result.socials]
            })
        setOpen(true) //La ce ne ajuta asta?
        setMessage("Success") 
        navigate("/") //de ce folosim aici navigate?
        })
        .catch((err) =>{
            setOpen(true)
            setMessage("Esec")
        })
    }
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
        <Paper elevation={4} style={{display:"flex", flexDirection:"column", justifyContent:"center", padding:"30px"}} >
        <Typography textAlign="center" marginBottom="30px" variant="h3" componenet="h3">
            Login
        </Typography>
        <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} id="outlined-basic" label="Email" variant="outlined"/>
        <TextField value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} style={{marginTop:25, marginBottom:25}} id="outlined-basic" label="Password" variant="outlined"/> 
        <Button onClick={handleChange} style={{width: 100, margin: "auto"}} variant="contained">Login</Button>
        </Paper>
        </Grid>
        </Grid>
        
        /*
         

        - !!! DONEEE !!!O structura de <Grid>, in care copilul ,
        sa aiba latimea de 4 unitati pe desktop si 12 pe mobil

        - !!! DONE !!! Doua text field uri, care sa fie legate la state ul intern
        al componentei ( folosesti useState ) pentru email si password

        - !!! DONE !!! o componenta de submit <Button> care pe on click, sa trigeruiasca functia 
        de handleLogin

        */}
            login
        </div>
    )
}