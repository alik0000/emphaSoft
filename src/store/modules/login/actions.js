import axios from "axios";

export default {
    async logIn ({ commit }, credentials) {
        return axios
            .post('https://test-assignment.emphasoft.com/api/v1/login/', credentials)
            .then(({ data }) => {
                commit('SET_TOKEN', data.token)
            })
    },
}