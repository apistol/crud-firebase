import React from 'react'
import imgplace from "./300.png"
import {useState, useEffect, useContext} from "react"
import axios from 'axios'
import AppContext from"../context/app-context"

export default function ProfileCard() {

    const [state, setState] = useContext(AppContext)

    const [imgfile, setImgFile] = useState(imgplace)

    const handleClick = () => {
        console.log(imgfile)
        
    }
    useEffect(() => {
        if(imgfile !== imgplace){
            const formdata = new FormData();
            formdata.append("image", imgfile, imgfile.name)
            axios.post(`user/avatar/${state.user.userId}`, formdata)
            .then((res) => {
                return console.log(res)
            })
            .catch(error => {
                return console.log(error)
            })
        }
    }, [imgfile])

  return (<div>
    <img onClick={handleClick} value={imgfile} style={{borderRadius: 80}}src={imgplace}/>
    <input onChange={(e) => {setImgFile(e.target.files[0])}} type="file"/>
  </div>
  )
}
