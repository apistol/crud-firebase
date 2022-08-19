import {useState, useEffect , useContext} from 'react'

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
import {useKeyPress} from "../hooks/useKeyPress"

import AppContext from "../context/app-context"

export default function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const enterPressed = useKeyPress()
    
    const [state, setState] = useContext(AppContext)
    
    const navigate = useNavigate()
    
    const handleSubmit = () => {
      axios
        .post("/user/login", { email, password })
        .then((res) => {
            setState({
                isLoggedIn: true,
                user: res.data.result,
                socials: []
            })
          setOpen(true)
          setMessage("Succes")
          navigate("/")
        })
        .catch((err) => {
          console.error(err)
          setOpen(true)
          setMessage("Esec")
        })
  
    }


    // const [images, setImages] = useState([]);
  
    // const onImageChange = (imageList, addUpdateIndex) => {
    //   // data for submit
    //   console.log(imageList, addUpdateIndex);
    //   setImages(imageList);
    // };
  
    // const handleUploadAvatar = () => {
  
    //   const fd = new FormData();
    //   fd.append('image', images[0].file, images[0].file.name);
    //   axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  
    //   axios.post("/user/avatar", fd).then(res => {
    //     console.log(res.data)
    //   }
    //   ).catch(err => {
    //     alert("esec")
    //   })
    // }

    useEffect(() => {
        if(enterPressed) handleSubmit()
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
                        <Typography variant="h5" component="h5" mb={3} style={{ textAlign: "center" }}>
                            Login
                        </Typography>
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                        <br />
                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
                        <br />
                        <Button onClick={handleSubmit} style={{ width: "200px", margin: "auto" }} variant="contained">Contained</Button>

                        {/* <ImageUploading
                            value={images}
                            onChange={onImageChange}
                            maxNumber={1}
                            dataURLKey="data_url"
                            acceptType={["jpg"]}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </button>
                                    &nbsp;
                                    <button onClick={onImageRemoveAll}>Remove all images</button>
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image.data_url} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                                <button onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>

                        <br />
                        <Button onClick={handleUploadAvatar} style={{ width: "200px", margin: "auto" }} variant="contained">Upload image</Button> */}
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
