<template>
    <app-hero :heroes="people.heroes"/>
</template>

<script>
import AppHero from "../components/AppHero";
export default {
  data() {
    return {
      people: {
        heroes: []
      }
    }
  },
  async mounted() {
    // fetch planets
    await this.$store.dispatch('fetchPlanets');

    await this.LoadingData();
  },
  methods: {
    async LoadingData(page = 1) {
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
    }
  },
  name: "AppMainBlock",
  components: {AppHero}
}
</script>

<style scoped>

</style>