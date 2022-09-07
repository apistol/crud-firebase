# 1. Setare Redux

    1. Instalam libraria "redux" folosin ,,npm i redux"
    2. Cream structura pentru redux: 

                    src {
                        redux {
                            index.js
                            reducers {
                                index.js
                            }
                        }
                    }

    3. Initializarea store-ului 

                    ./src/redux/index.js

                    import { createStore } from "redux"
                    import { reducer } from "./reducers"

                    const initalState = {
                        name:""
                    }

                    const store = createStore(reducer, initialState) 

                    export default store

                    ./src/redux/reducers/index.js

                    export default (state, action) => {
                    switch(action.type){
                        case "CHANGE_NAME":
                        return ({
                            ...state,
                            name:action.payload
                        })

                        default:
                        return state
                    }
                    }


    4. Atunci cand valorile din store se modifica, vrem sa se refreshuiasca UI ul, pentru asta , facem:

                    index.js

                    import store from "./redux"

                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    const renderer = () => root.render(
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                    );

                    renderer()

                    store.subscribe(renderer)

# 2. Citire si modificare state

                    import store from "./src/redux"

                    const name = store.getState().name

                    const handleChangeName = () => {
                        store.dispatch({
                            type:"CHANGE_NAME",
                            payload:"Pistol"
                        })
                    }

