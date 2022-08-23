import {useState, useEffect} from 'react'
import axios from "axios"

export default function Users() {

const [usersList, setUsersList] = useState([]) 
 
 const getUsers = () => {
    axios.get("/users")
        .then(res => {
            setUsersList(res.data.result)  
        })
        .catch( err => {
            console.error(err)
        })
 }
 useEffect(() => {
    getUsers()
 }, [])


  return (
    <div>
        <h2>Users</h2>
        {usersList.map( ( user ) => <div>
            {user?.name} | {user?.email}
        </div>)}
    </div>
  )
}
