<template>
  <div class="card">
    <div class="form-control">
      <label for="name">Поиск по имени</label>
      <input type="text" id="name" placeholder="Введите название героя!" v-model="searchName">
    </div>
    <div class="form-checkbox">
      <h4>Фильтрацию по полу: </h4>
      <div class="checkbox">
        <label for="all"> Все</label>
        <input type="radio" id="all" value='' v-model="gender">
      </div>
      <div class="checkbox">
        <label for="male"> Мужины</label>
        <input type="radio" id="male"  value="male" v-model="gender">
      </div>
      <div class="checkbox">
        <label for="female"> Женщины</label>
        <input type="radio" id="female" value="female" v-model="gender">
      </div>
    </div>
  </div>
  <div class="section" >
    <div v-for="(hero, i) in ListOFHeroes" :key="i" class="cards">
      <div class="images">
        <img :src="hero.img" alt="planet">
      </div>
      <div class="title">
        <div>
          <h3>Name: {{hero.name}}</h3>
          <h3>Planet: {{hero.homeworld}}</h3>
        </div>
          <font-awesome-layers class="fa-layers"  @click="toggleFavorite(hero)">
            <font-awesome-icon :icon="['fas', 'bookmark']" />
            <font-awesome-icon
                class="heart"
                :class="hero.isFavorite ? 'red' : 'white' "
                :icon="['fas','heart']"
                transform="shrink-10 up-2"
            />
          </font-awesome-layers>
        </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeLayers, FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  props: {
    heroes: {
      type: Array,
      require: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      favourites: [],
      searchName: '',
      gender: '', // all
    };
  },
  computed: {
    ListOFHeroes() {
      return this.heroes
          .filter((hero) => {
            const regex = new RegExp(this.searchName, 'gi');
            return (hero.name.match(regex) || !hero.name) && (hero.gender === this.gender || !this.gender);

          })
          .map((p) => {
            p.isFavorite = this.favourites.some((f) => f.url === p.url);
            return p
          });
    },
  },
  async mounted() {
    if (this.isFavorite) {
      this.favourites = this.heroes;
    }
    else {
      const locFav = localStorage.getItem('favorites');
      this.favourites = JSON.parse(locFav) || [];
    }
  },
  methods: {
    toggleFavorite(hero) {
      const personIdx = this.favourites.findIndex((p) => p.url === hero.url);
      if (personIdx > -1) {
        this.favourites.splice(personIdx, 1);
      }
      else {
        this.favourites.push(hero);
      }

      localStorage.setItem('favorites', JSON.stringify(this.favourites));
    },
  },
  name: "AppHero",
  components: {FontAwesomeLayers, FontAwesomeIcon}

}
</script>

<style scoped>
.white {
  color: white;
}
.heart:hover {
  color: red;
}
.red {
  color: red;
}

</style>