<template>
  <AppSection tag="section">
    <template #head>
      <h1>Список пользователей</h1>
    </template>
    <user-list :items="people.heroes"/>
  </AppSection>
</template>

<script>
import AppSection from "../components/AppSection";
import UserList from "../components/UserList";
import axios from "axios";

export default {
  data() {
    return {
      people: {
        heroes: []
      }
    }
  },
  async mounted() {
    try {
      const login = await axios.post('https://test-assignment.emphasoft.com/api/v1/login/', {
        username: "sda",
        password: "Nf<U4f<rDbtDxAPn"
      })
      console.log('login: ', login)
      // console.log('login: ', login.data)

      const { data } = await axios.get('https://test-assignment.emphasoft.com/api/v1/users', {
        headers: {
          Authorization: `Token ${login.data.token}`
        }
      })
    } catch (err) {
      console.log('err: ', err)
    }

    this.people.heroes = data

    console.log('users: ', data)

    await this.$store.dispatch('fetchPlanets');

    // await this.LoadingData();
  },
  methods: {
    /*async LoadingData(page = 1) {
      const { data } = await this.axios.get(`https://swapi.dev/api/people/?page=${page}`);
      const planets = this.$store.getters['Planets'];
      this.people.heroes = data.results.map((p) => {
        const planet = planets.find(plan => plan.url === p.homeworld);
        const [_, id] = p.url.match(/people\/(\d+)\//);

        return {
          ...p,
          homeworld: (planet && planet.name) || 'UNKNOWN',
          img: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        };
      })
    }*/
  },
  name: "AppMainBlock",
  components: {AppSection, UserList}
}
</script>

<style scoped>

</style>