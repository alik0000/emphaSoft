export default {
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token', token)
    },
    CLEAR_TOKEN(state) {
        state.token = ''
        localStorage.removeItem('token')
    },
    SET_ERROR_MESSAGE(state, message) {
        state.errorMessage = message
    },
    CLEAR_ERROR_MESSAGE(state) {
        state.errorMessage = ''
    }
}
