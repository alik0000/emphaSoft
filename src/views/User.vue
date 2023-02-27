<template>
  <AppSection tag="section">
    <template #head>
      <h1>Редактировать пользователя</h1>
    </template>
    <form class="user-form" @submit.prevent="submitForm">
      <div class="user-form__fields">
        <AppField
            v-model="form.username"
            :model-value="form.username"
            id="user-name"
            placeholder="Введите ваше имя"
            maxLength="150"
        >
          Ник
        </AppField>
        <AppField
            v-model="form.password"
            type="password"
            id="user-password"
            placeholder="Введите ваш пароль"
            maxLength="128"
        >
          Пароль
        </AppField>
        <AppField
            v-model="form.last_name"
            :model-value="form.last_name"
            id="last-name"
            placeholder="Введите ваше фамилия"
            maxLength="150"
        >
          Фамилия
        </AppField>
        <AppField
            v-model="form.first_name"
            :model-value="form.first_name"
            id="first-name"
            placeholder="Введите ваше имя"
            maxLength="150"
        >
          Имя
        </AppField>
      </div>
      <AppCheckbox v-model="form.is_active">активный</AppCheckbox>
      <div class="user-form__controls">
        <button type="submit" class="btn _accent">Редактировать</button>
        <router-link to="/users" type="button" class="btn _danger">Назад</router-link>
      </div>
    </form>
  </AppSection>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import axios from "axios";
import AppSection from "../components/AppSection.vue";
import AppField from "../components/AppField.vue";
import AppCheckbox from "../components/AppCheckbox.vue";
/**
 * @name EditForm
 * @description Form edition user
 */
export default {
  name: "User",
  components: {AppSection, AppField, AppCheckbox},

  setup() {
    const store = useStore()
    const route = useRoute()
    const form = ref({
      id: '',
      username: '',
      password: '',
      'first_name': '',
      'last_name': '',
      'is_active': false
    })
    const id = ref(route.params['id'])
    const token = computed(() => store.getters["login/Token"])

    const changeLoading = (flag) => {
      store.commit('modal/CHANGE_LOADING', flag)
    }

    onMounted(async () => {
      changeLoading(true)

      const { data } = await axios.get(`https://test-assignment.emphasoft.com/api/v1/users/${id.value}`, {
        headers: {
          Authorization: `Token ${token.value}`
        }
      })

      form.value = data
      changeLoading(false)
    })

    function submitForm() {
      changeLoading(true)
      store.dispatch('user/editUser', {...form.value})
    }

    return {
      form,
      submitForm
    }
  },
}
</script>