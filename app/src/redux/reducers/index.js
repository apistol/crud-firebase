export default (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return ({
                ...state,
                isLoggedIn: true
            })
        case "LOGOUT":
            return ({
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                socials: action.payload.socials
            })
        default:
            return state

    }


}