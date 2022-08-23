import React, { useContext, useState } from 'react'
import AppContext from './context/app-context'
import { Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function ListSocials() {

    //  destructurezi un array
    const [appState, setAppState] = useContext(AppContext)
    const [showDiv, setShowDiv] = useState(false)
    
    const { socials } = appState
    
    const handleOpen = () => { }




    return (
        <div>

            {socials.map((social) => <Paper elevation={4}>
                <a target="_blank" href={social.url} rel="noopener noreferrer" className='socialLink'>
                    {social.socialName}
                </a>
            </Paper>
            )}


            <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <Paper onClick={() => setShowDiv(true) } elevation={4} className="addSocialBtn" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px" }}>

                    <AddIcon style={{}} />

                </Paper>
            </div>

            {showDiv && <div onClick={() => setShowDiv(false)}>
                div ul nostru
            </div>}
        </div>
    )
}
