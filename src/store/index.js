import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    loading: false,
    users: [],
    token: localStorage.getItem('token') || '',
    modalComponent: 'CreateForm',
    modalVisible: false,
  },
  getters: {
    Users(state) {
      return state.users
    },
    Loading(state) {
      return state.loading
    },
    Token(state) {
      return state.token
    },
    ModalComponent(state) {
      return state.modalComponent
    },
    ModalVisible(state) {
      return state.modalVisible
    }
  },
  mutations: {
    SET_PLANETS (state, planets) {
      state.planets = planets
    },
    CHANGE_LOADING(state, flag = false) {
      state.loading = flag
    },
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    CLEAR_TOKEN(state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    SET_USER_DATA(state, {data}) {
      state.users = data
    },
    TOGGLE_MODAL_VISIBLE(state, visible) {
      state.modalVisible = visible
    }
  },
  actions: {
    async login ({ commit }, credentials) {
       return axios
           .post('https://test-assignment.emphasoft.com/api/v1/login/', credentials)
           .then(({ data }) => {
              commit('SET_TOKEN', data.token)
            })
    },
    async getData({commit}, token) {
      commit('CHANGE_LOADING', true)
      return await axios.get('https://test-assignment.emphasoft.com/api/v1/users', {
        headers: {
          Authorization: `Token ${token}`
        }
      }).then((res) => {
        commit('SET_USER_DATA', res)
        commit('CHANGE_LOADING', false)
      })
    },
    async createUser({commit}, payload) {
      commit('CHANGE_LOADING', true)
      return await axios.post('https://test-assignment.emphasoft.com/api/v1/users', {...payload})
          .then((res) => {
            commit('SET_USER_DATA', res)
            commit('CHANGE_LOADING', false)
            commit('TOGGLE_MODAL_VISIBLE', false)
          })
    },
    async editUser({commit}, data) {
      commit('CHANGE_LOADING', true)
      commit('TOGGLE_MODAL_VISIBLE', true)
      return await axios.put(`https://test-assignment.emphasoft.com/api/v1/users/1/${data.id}`, {...data})
          .then((res) => {
            commit('SET_USER_DATA', res)
            commit('CHANGE_LOADING', false)
            commit('TOGGLE_MODAL_VISIBLE', false)
          })
    }
  }
})


