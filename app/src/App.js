import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get("http://localhost:5000/ecommerce-2ebae/us-central1/api/users").then(res => {
      setUsers(res.data.result)
    })
  }, [])


  return (
    <div>
      Test manea
        {users.map( user => <p key={user.email}>{user.name} | {user.email}</p>)}
    </div>
  );
}

export default App;
