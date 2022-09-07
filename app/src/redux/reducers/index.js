export default (state, action) => {

    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
                socials: action.payload.socials
            }
        case "REGISTER":
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
                socials: action.payload.socials
            }
        default:
            return state
    }
}