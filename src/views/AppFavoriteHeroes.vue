<template>
  <app-hero :heroes="favourites" :isFavorite="true"/>
</template>

<script>
import AppHero from "../components/AppHero";
export default {
  components: {AppHero},
  computed: {
    favourites () {
      const locFav = localStorage.getItem('favorites');

      return JSON.parse(locFav) || [];
    }
  },
  name: "AppFavoriteHeroes"
}
</script>

<style scoped>

</style>