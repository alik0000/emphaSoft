import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    planets: []
  },
  getters: {
    Planets(state) {
      return state.planets
    }
  },
  mutations: {
    SET_PLANETS (state, planets) {
      state.planets = planets
    },
  },
  actions: {
    async fetchPlanets ({ commit }) {
      const planets = []

      for (let i = 1; i <= 6; i++) {
        const { data } = await axios.get(`https://swapi.dev/api/planets/?page=${i}`);

        planets.push(...data.results);
      }

      commit('SET_PLANETS', planets)
    },
  },
  modules: {
  }
})


