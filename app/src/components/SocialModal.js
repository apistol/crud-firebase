import {useState, useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import AppContext from '../context/app-context';

const style = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [socialName, setSocialName] = useState('');
    const [socialURL, setSocialURL] = useState('');

    const[appState,setAppState] = useContext(AppContext)

    const handleChange = (event) => {
        setSocialName(event.target.value);
    };

    const handlePost = () => {
        axios.post(`/user/${appState.user.userId}/socials`, ({socialName, socialURL}))
        .then(() => {
            setAppState({
                ...appState,
                socials:[...appState.socials,{socialName, socialURL}]
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <Button onClick={handleOpen}>Add Social</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Socials</InputLabel>
                            <Select
                                value={socialName}
                                label="Social"
                                onChange={handleChange}
                            >
                                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                                <MenuItem value={"Facebook"}>Facebook</MenuItem>
                                <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
                            </Select>
                            <TextField id="outlined-basic" label="URL" variant="outlined" value={socialURL} onChange={(e) => {setSocialURL(e.target.value)}}/>
                        </FormControl>
                    </Box>

                    <button onClick={handleClose}>Close</button>
                    <button onClick={()=> {handlePost()}}>Add</button>
                </Box>
            </Modal>
        </div>
    );
}