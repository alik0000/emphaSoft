<template>
  <div class="users">
    <div v-if="token" class="users__filter">
      <AppField id="search-user-name" placeholder="Введите имя пользователя" v-model="searchUsername">
        Поиск по имени
      </AppField>
    </div>
    <div v-if="token" class="users__items">
      <table v-if="!!users.length">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Ник</th>
            <th>Событие</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({id, last_name, first_name, username, is_active}, index) in users" :key="index">
            <td class="_center">
              <span>{{ id }}</span>
            </td>
            <td>{{ last_name }}</td>
            <td>{{ first_name }}</td>
            <td>{{ username }}</td>
            <td>
              <button type="button" class="btn _warning users__btn-edit" @click="edit(id)">
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
import {computed, ref} from "vue";
import {useStore} from 'vuex'
import AppField from "./AppField";
import {useRouter} from "vue-router";

/**
 * @name UserList
 * @description List of user
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
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const searchUsername = ref('')
    const token = computed(() => store.getters["login/Token"])

    const users = computed(() => {
      return props.items
          .filter(({username}) => {

            if (!!searchUsername.value) {
              const regex = new RegExp(searchUsername.value, 'gi');
              return username.match(regex)
            }

            return true
          })
          .sort(({id}, {id: nextId}) => id - nextId)
    })

    const edit = (id) => {
      router.push({ name: `user`, params: {id} })
    }

    return {
      searchUsername,
      users,
      edit,
      token,
    }
  },
}
</script>