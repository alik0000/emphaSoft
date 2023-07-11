<template>
  <AppSection tag="section">
    <template #head>
      <h1>Редактировать пользователя</h1>
    </template>
    <form class="user-form" @submit.prevent="submitForm">
      <div class="user-form__fields">
        <AppField
            v-model="username"
            :model-value="username"
            id="user-name"
            placeholder="Введите ваше имя"
            maxLength="150"
        >
          Ник
        </AppField>
        <AppField
            v-model="password"
            :model-value="password"
            type="password"
            id="user-password"
            placeholder="Введите ваш пароль"
            maxLength="128"
        >
          Пароль
        </AppField>
        <AppField
            v-model="last_name"
            :model-value="last_name"
            id="last-name"
            placeholder="Введите ваше фамилия"
            maxLength="150"
        >
          Фамилия
        </AppField>
        <AppField
            v-model="first_name"
            :model-value="first_name"
            id="first-name"
            placeholder="Введите ваше имя"
            maxLength="150"
        >
          Имя
        </AppField>
      </div>
      <AppCheckbox v-model="is_active">активный</AppCheckbox>
      <div class="user-form__controls">
        <button type="submit" class="btn _accent">Редактировать</button>
        <router-link to="/users" type="button" class="btn _danger">Назад</router-link>
      </div>
    </form>
  </AppSection>
</template>

<script>
import {ref, onMounted, toRefs, reactive} from "vue";
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
    const id = ref(route.params['id'])
    let form = reactive({
      id,
      username: '',
      password: '',
      'first_name': '',
      'last_name': '',
      'is_active': false
    })

    const changeLoading = (flag) => {
      store.commit('modal/CHANGE_LOADING', flag)
    }

    onMounted(async () => {
      changeLoading(true)

      const { data } = await axios.get(`/api/v1/users/${id.value}`)

      Object.assign(form, {...data})
      changeLoading(false)
    })

    function submitForm() {
      changeLoading(true)
      store.dispatch('user/editUser', {...form.value})
    }

    return {
      ...toRefs(form),
      submitForm
    }
  },
}
</script>
