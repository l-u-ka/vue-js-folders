export default {
    userId(state) {
        return state.userId
    },
    token(state) {
        return state.token
    },
    isAuthenticated(state) {
        return !!state.token; // !! converts a string value to true boolean
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
}