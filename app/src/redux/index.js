import {createStore} from "redux"
import reducer from "./reducers"

const initialState = {
    isLoggedIn: false,
    user: {
      name:"",
      email:""
    },
    socials: [],
    openDialog:false
}

const store = createStore(reducer, initialState)

export default store