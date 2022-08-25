import React, { useContext, useState } from 'react'
import AppContext from './context/app-context'
import { Paper, Dialog, DialogTitle, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';


export default function ListSocials() {

    //  destructurezi un array
    const [state, setState] = useContext(AppContext)
    const [showDialog, setShowDialog] = useState(false)
    const [socialName, setSocialName] = useState("")
    const [socialUrl, setSocialUrl] = useState("")
    const { socials } = state



    const handleSubmit = () => {

        axios
            .post(`user/${state.user.userId}/socials`, ({
                socialName: socialName,
                url: socialUrl

            }))
            .then((res) => {
                setState({
                    ...state,
                    socials: res.data.socials
                })
                setShowDialog(false)

            })
            .catch((err) => {
                alert(err)
            })

    }

    const handleDelete = (socialIndex) => {

        const newSocials = state.socials.filter((s, index) => { return socialIndex !== index })


        axios
            .post(`/delete/social/${state.user.userId}`, newSocials)
            .then((res) => {
                    
                setState({
                    ...state,
                    socials: res.data.socials
                })
                setShowDialog(false)

            })
            .catch((err) => {
                alert(err)
            })




    }
    // 3. handleDelete( socialIndex ) function, care primeste ca argument index-ul din lista

    // creezi o lista, const newSocials = , care va fi egal cu state.socials.filter((s, index)= > {return socialIndex !== index})


    // endpoint "/delete/social/:userId" 
    // metoda request-ului : POST
    // payload : [{
    // socialName:"",
    // url:""
    // }]

    // raspus de la be : 
    // [{
    // socialName:"",
    // url:" 
    // }]

    // pe then, actualizez contextul ul pentru social



    // pe catch, doar pui o alerta


    return (
        <div>

            {socials.map((social, index) => <Paper elevation={4}>
                <a target="_blank" href={social.url} rel="noopener noreferrer" className='socialLink'>
                    {social.socialName}
                </a>
                <Button onClick={() => handleDelete(index)}> <DeleteIcon /> </Button>
                {/* 1.  O componenta Button cu un x in ea */}
                {/* 2.  Are o actiune pe onClick invoca metoda, handleDeleteSocial, 
                    care primeste argumentul ,,index"  */}
            </Paper>
            )}


            <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <Paper onClick={() => setShowDialog(true)} elevation={4} className="addSocialBtn" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px" }}>
                    <AddIcon style={{}} />
                </Paper>
            </div>

            <Dialog onClose={() => setShowDialog(false)} open={showDialog}>
                <DialogTitle>Add social</DialogTitle>
                <TextField value={socialName} onChange={(e) => setSocialName(e.target.value)} label="Nume" />
                <br />
                <TextField value={socialUrl} onChange={(e) => setSocialUrl(e.target.value)} label="Link" />
                <br />
                <Button onClick={handleSubmit}> Submit </Button>


            </Dialog>
        </div>
    )
}
