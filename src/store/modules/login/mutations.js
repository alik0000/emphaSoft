export default {
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token', token)
    },
    CLEAR_TOKEN(state) {
        state.token = ''
        localStorage.removeItem('token')
    },
}