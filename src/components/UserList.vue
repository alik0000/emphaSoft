<template>
  <div class="users">
    <div class="users__filter">
      <div class="field">
        <label for="name">Поиск по имени</label>
        <input type="text" id="name" placeholder="Введите имя пользователя" v-model="searchName">
      </div>
    </div>
    <div class="users__items">
      <table v-if="!!ListOFHeroes.length">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Ник</th>
            <th>Активный</th>
            <th>Событие</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({id, first_name, last_name, username, is_active}, index) in ListOFHeroes" :key="index">
            <td class="_center">
              <span>{{ id }}</span>
            </td>
            <td>{{ last_name }}</td>
            <td>{{ first_name }}</td>
            <td>{{ username }}</td>
            <td>{{ is_active ? 'Да' : 'Нет' }}</td>
            <td>
              <button type="button" class="users__btn-edit" @click="edit">
                Редактирование
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="users__undefined">
        <h2>Ничего не найдено</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeLayers, FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {mapMutations} from 'vuex'
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
      // gender: '', // all
    };
  },
  computed: {
    ListOFHeroes() {
      const res = this.heroes
          .filter(({username}) => {

            if (!!this.searchName) {
              const regex = new RegExp(this.searchName, 'gi');
              return username.match(regex)
            }

            return true
          })
          .sort(({id}, {id: nextId}) => id-nextId)

      return res

      // return this.heroes
      //     .filter((hero) => {
      //       const regex = new RegExp(this.searchName, 'gi');
      //       return (hero.name.match(regex) || !hero.name) && (hero.gender === this.gender || !this.gender);
      //
      //     })
      //     .map((p) => {
      //       p.isFavorite = this.favourites.some((f) => f.url === p.url);
      //       return p
      //     });
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
    ...mapMutations(['CHANGE_LOADING']),
    edit() {
      this.CHANGE_LOADING(true)
    }
    // toggleFavorite(hero) {
    //   const personIdx = this.favourites.findIndex((p) => p.url === hero.url);
    //   if (personIdx > -1) {
    //     this.favourites.splice(personIdx, 1);
    //   }
    //   else {
    //     this.favourites.push(hero);
    //   }
    //
    //   localStorage.setItem('favorites', JSON.stringify(this.favourites));
    // },
  },
  name: "Users",
  components: {FontAwesomeLayers, FontAwesomeIcon}

}
</script>