import axios from "axios";
import router from "../../../router";

export default {
    async getData({commit}) {
        const { data } = await axios.get('/api/v1/users')

        commit('SET_USER_DATA', data)
    },
    async createUser({commit}, payload) {
        commit('modal/CHANGE_LOADING', true, { root: true })
        const { data } = await axios.post('/api/v1/users', payload)

        commit('SET_USER_DATA', data)
        commit('modal/CHANGE_LOADING', false, { root: true })
        commit('modal/TOGGLE_MODAL_VISIBLE', false, { root: true })
    },
    async editUser({commit, state}, {id, username, password, first_name, last_name, is_active}) {
        const { data } = await axios.put(`/api/v1/users/${id}`, {
            username, first_name, last_name, password, is_active
        })

        commit('SET_USER_DATA', data)
        commit('modal/CHANGE_LOADING', false, { root: true })
        await router.push({name: 'users'})
    }
}
