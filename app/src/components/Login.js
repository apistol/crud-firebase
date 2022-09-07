import { useState, useEffect, useContext } from 'react'

import axios from "axios"
// import ImageUploading from "react-images-uploading";

import { useNavigate } from "react-router-dom";

// MUI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { useKeyPress } from "../hooks/useKeyPress"
import store from '../redux';

export default function Login() {


    const [email, setEmail] = useState("gun")
    const [password, setPassword] = useState("123456")
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const enterPressed = useKeyPress()


    const navigate = useNavigate()

    const handleSubmit = () => {
        axios
            .post("/user/login", { email, password })
            .then((res) => {
                debugger
                store.dispatch({
                    type: "LOG_IN",
                    payload: {
                        isLoggedIn: true,
                        user: {
                            userId: res.data.result.userId,
                            email: res.data.result.email
                        },
                        socials: [...res.data.result.socials]
                    }
                })
                setOpen(true)
                setMessage("Succes")
                // navigate("/")
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

    const state = store.getState()

    return (
        <div style={{ height: "100vh" }}>
            <pre>{JSON.stringify(state.user.email,1,1)}</pre>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height={"100%"}
            >
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }}>
                        <Typography variant="h5" component="h5" mb={3} style={{ textAlign: "center" }}>
                            Login
                        </Typography>
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                        <br />
                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
                        <br />
                        <Button onClick={handleSubmit} style={{ width: "200px", margin: "auto" }} variant="contained">Login</Button>

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
