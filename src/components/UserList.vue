<template>
  <div class="users">
    <div class="users__filter">
      <AppField id="search-user-name" placeholder="Введите имя пользователя" v-model="searchUsername">
        Поиск по имени
      </AppField>
    </div>
    <div v-if="Token" class="users__items">
      <table v-if="!!users.length">
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
          <tr v-for="(user, index) in users" :key="index">
            <td class="_center">
              <span>{{ user.id }}</span>
            </td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.is_active ? 'Да' : 'Нет' }}</td>
            <td>
              <button type="button" class="btn _warning users__btn-edit" @click="edit(user)">
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
    <div v-else class="users__not-able">
      <h3>Не доступно!</h3>
      <p>
        К сожалению, вы не авторизованы, для получения доступа вам необходимо авторизоваться по
        <router-link to="/login">
          ссылке
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import AppField from "./AppField";

/**
 * @name UserList
 * @description List of users
 */
export default {
  name: "UserList",
  components: {AppField},
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      searchUsername: '',
    };
  },
  computed: {
    ...mapGetters(['Token']),
    users() {
      return this.items
          .filter(({username}) => {

            if (!!this.searchUsername) {
              const regex = new RegExp(this.searchUsername, 'gi');
              return username.match(regex)
            }

            return true
          })
          .sort(({id}, {id: nextId}) => id - nextId)
    },
  },
  methods: {
    ...mapMutations(['CHANGE_LOADING']),
    edit(data) {
      // this.CHANGE_LOADING(true)
      this.$store.dispatch('editUser', data)
    }
  },
}
</script>