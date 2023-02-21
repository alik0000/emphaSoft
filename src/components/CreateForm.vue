<template>
  <form class="user-form" @submit.prevent="submitForm">
    <div class="user-form__fields">
      <AppField
          id="user-name"
          placeholder="Введите ваше имя"
          v-model="form.username"
      >
        Ник
      </AppField>
      <AppField
          type="password"
          id="user-password"
          placeholder="Введите ваш пароль"
          v-model="form.password"
      >
        Пароль
      </AppField>
      <AppField id="last-name"
                placeholder="Введите ваше фамилия"
                v-model="form.last_name"
      >
        Фамилия
      </AppField>
      <AppField id="first-name"
                placeholder="Введите ваше имя"
                v-model="form.first_name"
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

export default {
  name: "UserForm",
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

<style lang="scss">
.user-form {
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;
  max-width: 80rem;
  padding: 2.4rem;
  border-radius: 3.2rem;
  background-color: var(--element-background);

  &__fields {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;

    > * {
      flex: 1 0 calc(100% / 2 - 0.8rem);
    }
  }

  &__controls {
    display: flex;
    column-gap: 1.6rem;
  }
}
</style>