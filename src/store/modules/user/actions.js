import axios from "axios";
import router from "../../../router";

export default {
    async getData({commit}, token) {
        const { data } = await axios.get('https://test-assignment.emphasoft.com/api/v1/users', {
            headers: {
                Authorization: `Token ${token}`
            }
        })

        commit('SET_USER_DATA', data)
    },
    async createUser({commit, state}, {username, password, first_name, last_name, is_active}) {
        commit('CHANGE_LOADING', true)
        const { data } = await axios.post('https://test-assignment.emphasoft.com/api/v1/users', {
            username,
            first_name,
            last_name,
            password,
            is_active,
        }, {
            headers: {
                Authorization: `Token ${state.token}`,
            }
        })

        commit('SET_USER_DATA', data)
        commit('CHANGE_LOADING', false)
        await router.push({name: 'users'})
    },
    async editUser({commit, state}, {id, username, password, first_name, last_name, is_active}) {
        const { data } =  await axios.put(`https://test-assignment.emphasoft.com/api/v1/users/${id}`, {
            username,
            first_name,
            last_name,
            password,
            is_active,
        }, {
            headers: {
                Authorization: `Token ${state.token}`,
            }
        })

        commit('CHANGE_LOADING', false)
        await router.push({name: 'users'})
    }
}