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


export default function Dashboard() {

  const [appState, setAppState] = useContext(AppContext)
  const [open, setOpen] = useState(false);

  return (
    <div>
      <pre>{JSON.stringify(appState, 2, 1)}</pre>

      <Button variant='outlined' onClick={() => setOpen(true)} className="addSocialCard">
        <AddIcon />
      </Button>

      <AddSocialDialog open={open} handleClose={() => setOpen(false)} />
    </div>
  )
}


const AddSocialDialog = ({ open, handleClose }) => {

  const [socialName, setSocialName] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
  <Dialog onClose={handleClose} open={open}>
    <DialogTitle>Add social</DialogTitle>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Socials</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Dialog>
  )
}
