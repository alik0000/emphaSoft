import axios from "axios";

export default {
    async logIn ({ commit }, credentials) {
        try {
            const { data } = await axios.post('/api/v1/login/', credentials)
            if (!!data.token) {
                axios.defaults.headers.common['Authorization'] = `Token ${data.token}`
                commit('SET_TOKEN', data.token)
            }
        } catch (err) {
            commit('SET_ERROR_MESSAGE', err.response.data.non_field_errors[0])
        }
    },
}
