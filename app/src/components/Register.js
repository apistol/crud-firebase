import React from 'react'

export default function Register() {

  // 1. state ul pentru name, email si parola, sa fie intr-o singura variabila
  // ex: useState({ name: ... , email: ... parola:...})

 // 2 functia de handleRegister

  // folosesti axios, pentru a apela endpoint-ul, 


    // in caz de succes => redirect catre dashboard 
    // importi din react router dom   import { useNavigate } from "react-router-dom";
    // dupa il initializez cu  const navigate = useNavigate()
    // navigate("/dashboard")


    // in caz de eroare => o afisezi in console


    // axios.metodaTa( arg1 , arg2 - doar daca e un post sau put ).then().catch()
    // endpoint: "/register"
    // metoda: POST
    // argumentul requestului 
    // {
    //     email: "robert@gmail.com",
    //     name:"",
    //     password: "123456"
    // }
    // returneaza {
    //     result:{
    //         email:"",
    //         name:"",
    //         userId:""
    //     }
    // }
  return (
    <div>
     {/* Text field pentru name */}
     {/* Text field pentru email */}
     {/* Text field pentru parola */}
     {/* Buton pentru submit */}

      Register
    </div>
  )
}
