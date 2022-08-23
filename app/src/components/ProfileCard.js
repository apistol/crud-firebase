import React from 'react'
import imgplace from "./300.png"
import {useState, useEffect, useContext} from "react"
import axios from 'axios'
import AppContext from"../context/app-context"
import "./ProfileCard.css"

export default function ProfileCard() {

    const [state, setState] = useContext(AppContext)

    const [imgeUrl, setImageUrl] = useState(imgplace)

    const [imgfile, setImgFile] = useState(null)

    const handleClick = () => {
        console.log(imgfile)
        
    }

    useEffect(() => {
        if(state.user.avatarUrl){
            setImageUrl(state.user.avatarUrl)
        }
    }, [state.user.avatarUrl])

    useEffect(() => {
        if(imgfile){
            const formdata = new FormData();
            formdata.append("image", imgfile, imgfile.name)
            axios.post(`user/avatar/${state.user.userId}`, formdata)
            .then((res) => {
                return setImageUrl(res.data.image)
            })
            .catch(error => {
                return console.log(error)
            })
        }
    }, [imgfile])

  return (<div style={{display: "flex"}}>
    <img onClick={handleClick} style={{borderRadius: 80, width:300, height:300}} src={imgeUrl}/>
    <div style={{position:"absolute"}}>

    <input class="custom-file-input" style={{background: "none", height: 300, width: 300}}onChange={(e) => {setImgFile(e.target.files[0])}} type="file"/>
    </div>
  </div>
  )
}
