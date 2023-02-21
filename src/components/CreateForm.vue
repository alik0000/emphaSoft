<template>
  <form class="user-form" @submit.prevent="submitForm">
    <div class="user-form__fields">
      <AppField
          v-model="form.username"
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
                id="last-name"
                placeholder="Введите ваше фамилия"
                maxLength="150"
      >
        Фамилия
      </AppField>
      <AppField
                v-model="form.first_name"
                id="first-name"
                placeholder="Введите ваше имя"
                maxLength="150"
      >
        Имя
      </AppField>
    </div>
    <AppCheckbox v-model="form.is_active">активный</AppCheckbox>
    <div class="user-form__controls">
      <button type="submit" class="btn _accent">Создать</button>
      <button type="button" class="btn _danger" @click="closeForm">Закрыть</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";
import AppField from "./AppField";
import AppCheckbox from "./AppCheckbox";

/**
 * @name CreateForm
 * @description Form creation user
 */
export default {
  name: "CreateForm",
  components: {AppField, AppCheckbox},
  data() {
    return {
      form: {
        username: '',
        password: '',
        'first_name': '',
        'last_name': '',
        'is_active': false
      }
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_MODAL_VISIBLE']),
    closeForm() {
      this.TOGGLE_MODAL_VISIBLE(false)
    },
    async submitForm() {
      await this.$store.dispatch('createUser', {...this.form})
    }
  }
}
</script>