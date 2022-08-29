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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = () => {
        axios.post("/register", formData)
            .then((res) => {
                setAppState({
                    isLoggedIn: true,
                    user: {
                        name: res.data.name,
                        email: res.data.email,
                        userId: res.data.userId
                    }
                })
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" height="80%">
                <Grid item xs={4}>
                    <Paper elevation={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px" }} >
                        <Typography textAlign="center" marginBottom="30px" variant="h3" componenet="h3">
                            Register
                        </Typography>
                        <TextField value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField value={formData.password} type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={{ marginTop: 25, marginBottom: 25 }} id="outlined-basic" label="Password" variant="outlined" />
                        <Button onClick={handleChange} style={{ width: 100, margin: "auto" }} variant="contained">Submit</Button>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

