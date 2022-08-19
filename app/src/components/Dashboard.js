import { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import AppContext from "../context/app-context"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import axios from "axios";
import {Link} from "react-router-dom";

export default function Dashboard() {

  const [appState, setAppState] = useContext(AppContext)
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ListSocials />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant='outlined'
          onClick={() => setOpen(true)}
          className="addSocialCard"
        >
          <AddIcon />
        </Button>
      </div>

      <AddSocialDialog
        open={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  )
}


const AddSocialDialog = ({ open, handleClose, userId }) => {

  const [socialName, setSocialName] = useState('');
  const [url, setUrl] = useState('');
  const [appState, setAppState] = useContext(AppContext)

  const handleSubmit = () => {
    axios.post(`/user/${appState.user.userId}/socials`, ({ socialName, url }))
      .then(() => {
        setAppState({
          ...appState,
          socials: [...appState.socials, { socialName, url }]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add social</DialogTitle>
      <div style={{ padding: "30px", width: 400 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Socials</InputLabel>
          <Select
            style={{ width: "400px" }}
            value={socialName}
            label="Social name"
            onChange={event => setSocialName(event.target.value)}
          >
            <MenuItem value={"Facebook"}>Facebook</MenuItem>
            <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
            <MenuItem value={"Twitter"}>Twitter</MenuItem>
            <MenuItem value={"Instagram"}>Instagram</MenuItem>
          </Select>
        </FormControl>

        <TextField value={url} onChange={(e) => setUrl(e.target.value)} style={{ width: "400px", marginTop: 30 }} label="Url" variant="outlined" />

        <Button style={{ marginTop: 30 }} variant="contained" onClick={handleSubmit}>Submit</Button>
        <Button style={{ marginTop: 30, marginLeft: 20 }} variant="contained" onClick={handleClose}>Cancel</Button>

      </div>
    </Dialog>
  )
}


const ListSocials = () => {

  const [appState, setAppState] = useContext(AppContext)

  return <div>
    {appState.socials.map(social => (<Paper key={social.url} elevation={3} style={{ margin: 20, padding: 10 }}>
      <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }} href={social.url}>{social.socialName}</a>
      {/* <span onClick={ () => window.location.host = social.url}>{social.socialName}</span> */}
      {/* <Link to={{ pathname: social.url }} target="_blank" >{social.socialName}</Link> */}

    </Paper>))}
  </div>
}