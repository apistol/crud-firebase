import { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import useKeyPress from '../hooks/useKeyPress';

import AppContext from "../components/context/app-context"


export default function Login() {


    const [email, setEmail] = useState("esec")
    const [password, setPassword] = useState("daa")
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const enterPressed = useKeyPress()
    const [state, setState] = useContext(AppContext)


    let navigate = useNavigate()


    const handleSubmit = () => {

        axios
            .post("/user/login", { email, password })
            .then((res) => {
                const {userId, email, socials} = res.data.result
                setState({
                    isLoggedIn: true,
                    user: {
                        userId:userId,
                        email:email,
                    },
                    socials: [...socials]
                })
                setOpen(true)
                setMessage("Success")
                navigate("/")
            })
            .catch((err) => {
                console.error(err)
                setOpen(true)
                setMessage("Esec")
            })

    }


    useEffect(() => {
        if (enterPressed) handleSubmit()
    }, [enterPressed])


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
                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
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
    )
}
