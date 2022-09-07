import  {createStore} from "redux"
import reducer from "./reducers"


const initialState= {
    isLoggedIn: true,
    user: {
        userId:"1",
        email:"mna@gmail.com",
        name:"manea"
    },
    socials: []
}


const store = createStore(reducer, initialState)



export default store