const Login = () => {

    // https://mui.com/material-ui/getting-started/overview/


// 1 state ul tau

// 2 functia de handleLogin

    // folosesti axios, pentru a apela endpoint-ul, 


    // in caz de succes => redirect catre dashboard 
    // importi din react router dom   import { useNavigate } from "react-router-dom";
    // dupa il initializez cu  const navigate = useNavigate()
    // navigate("/dashboard")


    // in caz de eroare => o afisezi in console


    // axios.metodaTa( arg1 , arg2 - doar daca e un post sau put ).then().catch()
    // endpoint: "/login"
    // metoda: POST
    // argumentul requestului 
    // {
    //     email: "robert@gmail.com",
    //     password: "123456"
    // }
    // returneaza {
    //     result:{
    //         email:"",
    //         password:"",
    //         socials:"",
    //         userId:""
    //     }
    // }


    return (
        <div>

        {/* 

        - O structura de <Grid>, in care copilul ,
        sa aiba latimea de 4 unitati pe desktop si 12 pe mobil

        - Doua text field uri, care sa fie legate la state ul intern
        al componentei ( folosesti useState ) pentru email si password

        - o componenta de submit <Button> care pe on click, sa trigeruiasca functia 
        de handleLogin

        */}
            login
        </div>
    )
}